using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using MeetingCaptureWebApp.Helpers;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Graph;

namespace MeetingCaptureWebApp.Services
{
    public class UserService : BaseGraphService, IUserService
    {
        private readonly IMemoryCache _memoryCache;

        public UserService(IGraphSdkHelper graphSdkHelper, IMemoryCache memoryCache) : base(graphSdkHelper)
        {
            _memoryCache = memoryCache;
        }

        public async Task<List<Person>> GetRelevancePeople(string teamId)
        {
            var people = await GraphClient.Me.People.Request().Select("displayName,scoredEmailAddresses").Top(50).GetAsync();

            var memberIds = await GetGroupUserIds(teamId);

            return people.Where(o => memberIds.Contains(o.Id)).Take(5).ToList();
        }

        public async Task<IList<User>> SearchUser(string searchWord)
        {
            string searchWordEncode = searchWord.Replace("'", "''");
            return await GraphClient.Users.Request().Filter(Uri.EscapeDataString($"startswith(displayName,'${searchWordEncode}') or startswith(givenName,'{searchWordEncode}') or startswith(surname,'{searchWordEncode}') or startswith(mail,'{searchWordEncode}') or startswith(userPrincipalName,'{searchWordEncode}'")).GetAsync();
        }

        public async Task<User> GetUserByEmail(string email)
        {
            if (_memoryCache.TryGetValue(email, out User user))
            {
                return user;
            }

            user = await GraphClient.Users[email].Request().GetAsync();

            _memoryCache.Set(email, user);

            return user;
        }

        public Task<User> Me()
        {
            return GraphClient.Me.Request().GetAsync();
        }

        public Task SendMail(string subject, string[] mails, string content)
        {
            var message = new Message
            {
                Subject = subject,
                Body = new ItemBody
                {
                    ContentType = BodyType.Html,
                    Content = content
                },
                ToRecipients = mails.Select(mail => new Recipient
                {
                    EmailAddress = new EmailAddress
                    {
                        Address = mail
                    }
                }).ToList()
            };

            var saveToSentItems = false;

            return GraphClient.Me
                .SendMail(message, saveToSentItems)
                .Request()
                .PostAsync();
        }

        private async Task<IEnumerable<string>> GetGroupUserIds(string teamId)
        {
            var result = new List<string>();
            var members = await GraphClient.Groups[teamId].TransitiveMembers.Request().Select("id").Top(50).GetAsync();
            result.AddRange(members.Where(o => o is User).Select(o => o.Id));
            while (members.NextPageRequest != null)
            {
                members = await members.NextPageRequest.GetAsync();
                result.AddRange(members.Where(o => o is User).Select(o => o.Id));
            }
            return result;
        }
    }
}

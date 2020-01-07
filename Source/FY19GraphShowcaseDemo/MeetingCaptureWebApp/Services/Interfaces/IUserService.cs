using Microsoft.Graph;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MeetingCaptureWebApp.Services
{
    public interface IUserService
    {
        Task<User> GetUserByEmail(string email);
        Task<IList<User>> SearchUser(string searchWord);
        Task<List<Person>> GetRelevancePeople(string teamId);
        Task SendMail(string subject, string[] mails, string content);
        Task<User> Me();
    }
}

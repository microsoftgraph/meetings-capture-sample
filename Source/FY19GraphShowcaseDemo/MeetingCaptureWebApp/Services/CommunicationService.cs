using MeetingCaptureWebApp.Extensions;
using MeetingCaptureWebApp.Helpers;
using Microsoft.Extensions.Configuration;
using Microsoft.Graph;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace MeetingCaptureWebApp.Services
{
    public class CommunicationService : BaseGraphService, ICommunicationService
    {
        public CommunicationService(IGraphSdkHelper graphSdkHelper) : base(graphSdkHelper)
        {
            //_graphClient = _graphSdkHelper.GetDaemonAppClient();
        }

        public async Task<string> CreateOnlineMeeting(string subject, DateTime startDateTime, string organizerId)
        {
            var onlineMeeting = new OnlineMeeting
            {
                Subject = subject,
                StartDateTime = startDateTime,
                Participants = new MeetingParticipants
                {
                    Organizer = new MeetingParticipantInfo
                    {
                        Identity = new IdentitySet
                        {
                            User = new Identity
                            {
                                Id = organizerId
                            }
                        }
                    }
                }
            };

            var createdOnlineMeeting = await GraphClient.Me.OnlineMeetings.Request().AddAsync(onlineMeeting);

            return createdOnlineMeeting.JoinUrl;
        }
    }
}

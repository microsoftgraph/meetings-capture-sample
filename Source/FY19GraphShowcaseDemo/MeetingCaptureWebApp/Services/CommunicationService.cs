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
    public class CommunicationService : ICommunicationService
    {
        private readonly IGraphSdkHelper _graphSdkHelper;

        public CommunicationService(IGraphSdkHelper graphSdkHelper)
        {
            _graphSdkHelper = graphSdkHelper;
            //_graphClient = _graphSdkHelper.GetDaemonAppClient();
        }

        // Currently MS Graph Client SDK does not support OnlineMeeting API.
        public async Task<string> CreateOnlineMeeting(string subject, DateTime startDateTime, string organizerId)
        {
            var onlineMeeting = new
            {
                meetingType = "scheduled",
                subject,
                startDateTime,
                participants = new
                {
                    organizer = new
                    {
                        identity = new
                        {
                            user = new
                            {
                                id = organizerId
                            }
                        }
                    }
                }
            };

            var accessToken = await _graphSdkHelper.GetDaemonAppAccessToken();

            using (var client = new HttpClient())
            {
                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);
                using (var request = new HttpRequestMessage(HttpMethod.Post, "https://graph.microsoft.com/beta/app/onlineMeetings"))
                {
                    var json = JsonConvert.SerializeObject(onlineMeeting);
                    using (var stringContent = new StringContent(json, Encoding.UTF8, "application/json"))
                    {
                        request.Content = stringContent;

                        using (var response = await client
                            .SendAsync(request, HttpCompletionOption.ResponseHeadersRead)
                            .ConfigureAwait(false))
                        {
                            response.EnsureSuccessStatusCode();
                            string result = await response.Content.ReadAsStringAsync();
                            dynamic jToken = JToken.Parse(result);
                            return jToken.joinUrl;
                        }
                    }
                }
            }
        }
    }
}

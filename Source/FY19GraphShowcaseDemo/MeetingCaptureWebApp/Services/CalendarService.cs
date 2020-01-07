using MeetingCaptureWebApp.Data;
using MeetingCaptureWebApp.Helpers;
using Microsoft.CodeAnalysis.Options;
using Microsoft.Graph;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MeetingCaptureWebApp.Services
{
    public class CalendarService : BaseGraphService, ICalendarService
    {
        private const string EXTENSION_NAME = "meetingCapture.Extensions";
        public CalendarService(IGraphSdkHelper graphSdkHelper) : base(graphSdkHelper)
        {
        }
        public Task<ICalendarGetScheduleCollectionPage> SearchAvailableTime(string[] emails, string start, string end, int interval)
        {
            var schedules = new List<string>(emails);

            var startTime = new DateTimeTimeZone
            {
                DateTime = start,
                TimeZone = "UTC"
            };

            var endTime = new DateTimeTimeZone
            {
                DateTime = end,
                TimeZone = "UTC"
            };

            return GraphClient.Me.Calendar
                .GetSchedule(schedules, endTime, startTime, interval)
                .Request()
                .Header("Prefer", "outlook.timezone=\"UTC\"")
                .PostAsync();
        }
        public async Task<Event> CreateEvent(string subject, DateTimeTimeZone startTime, DateTimeTimeZone endTime, string htmlContent, IEnumerable<Attendee> attendees, Meeting meeting, string bucketId)
        {
            //Extension
            var evExtCollPage = new EventExtensionsCollectionPage();
            var dict = new Dictionary<string, object>();
            dict.Add("teamId", meeting.TeamId);
            dict.Add("channelId", meeting.ChannelId);
            dict.Add("meetingId", meeting.Id);
            dict.Add("bucketId", bucketId);
            var openExtension = new OpenTypeExtension
            {
                ODataType = "microsoft.graph.openTypeExtension",
                ExtensionName = EXTENSION_NAME,
                AdditionalData = dict
            };
            evExtCollPage.Add(openExtension);

            var groupEvent = new Event()
            {
                Subject = subject,
                Start = startTime,
                End = endTime,
                Body = new ItemBody
                {
                    ContentType = BodyType.Html,
                    Content = htmlContent
                },
                Attendees = attendees,
                Extensions = evExtCollPage
            };
            return await GraphClient.Groups[meeting.TeamId].Events.Request().AddAsync(groupEvent);
        }

        public async Task<Event> GetEvent(string teamId, string eventId)
        {
            return await GraphClient.Groups[teamId].Events[eventId].Request().Expand($"extensions($filter=id%20eq%20'{EXTENSION_NAME}')").GetAsync();
        }

        public async Task<IEnumerable<Event>> GetUpcomingLatestMeeting(string teamId, string channelId)
        {
            var eventList = new List<Event>();
            var pagedEvents = await GraphClient.Groups[teamId].Events.Request()
                .Filter($"Extensions/any(f:f/id eq '{EXTENSION_NAME}') and start/datetime gt '{DateTime.UtcNow.ToString("yyyy-MM-ddThh:mm")}'")
                .Expand($"Extensions($filter=id eq '{EXTENSION_NAME}')")
                .OrderBy("start/datetime desc")
                .GetAsync();
            eventList.AddRange(pagedEvents.CurrentPage);
            while (pagedEvents.NextPageRequest != null)
            {
                pagedEvents = await pagedEvents.NextPageRequest.GetAsync();
                eventList.AddRange(pagedEvents.CurrentPage);
            }

            return eventList.Where(o => o.Extensions?.FirstOrDefault()?.AdditionalData["channelId"].ToString() == channelId);
        }

        public async Task DeleteEventById(string teamId, string eventId)
        {
            await GraphClient.Groups[teamId].Events[eventId].Request().DeleteAsync();
        }
    }
}

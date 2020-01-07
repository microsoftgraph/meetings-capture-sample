using MeetingCaptureWebApp.Data;
using Microsoft.Graph;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MeetingCaptureWebApp.Services
{
    public interface ICalendarService
    {
        Task<ICalendarGetScheduleCollectionPage> SearchAvailableTime(string[] emails, string start, string end, int interval);
        Task<Event> GetEvent(string teamId, string eventId);
        Task<IEnumerable<Event>> GetUpcomingLatestMeeting(string teamId, string channelId);
        Task<Event> CreateEvent(string subject, DateTimeTimeZone startTime, DateTimeTimeZone endTime, string htmlContent, IEnumerable<Attendee> attendees, Meeting meeting, string bucketId);
        Task DeleteEventById(string teamId, string eventId);
    }
}

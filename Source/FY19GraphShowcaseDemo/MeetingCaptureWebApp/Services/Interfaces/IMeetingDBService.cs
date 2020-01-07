using MeetingCaptureWebApp.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MeetingCaptureWebApp.Services
{
    public interface IMeetingDBService
    {
        Task<Meeting> GetMeetingById(int id);
        Task<Meeting> GetMeetingByEventId(string eventId);
        Task<IList<Meeting>> GetMeetingByTimeRange(DateTime startTime, DateTime endTime);

        Task<int> UpdateMeeting(Meeting meeting);
        Task<int> UpdateMeeting(Meeting meeting, IList<MeetingAttendee> meetingAttendees, IList<TaskFile> taskFiles);
        Task DeleteMeeting(Meeting meeting);
        Task<int> AddMeeting(Meeting meeting);
        IList<Meeting> ListMeetings(string teamId, string channelId);
        string GenerateMeetingHtmlMeetingBody(Meeting meeting, string ogId);

        Task<TeamChannel> GetChannelById(string channelId);
        Task<int> AddChannel(TeamChannel teamChannel);
    }
}

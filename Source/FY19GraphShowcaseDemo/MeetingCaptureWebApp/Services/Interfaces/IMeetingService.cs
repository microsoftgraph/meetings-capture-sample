using MeetingCaptureWebApp.Data;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MeetingCaptureWebApp.Services
{
    public interface IMeetingService
    {
        Task<TeamChannel> CreateOrGetChannelInfo(string channelId, string teamId);
        Task<Meeting> InitializeMeeting(string title, string teamId, TeamChannel channel, DateTime date, string[] agendas);
        Task<Meeting> SetupMeetingEvent(string title, DateTime start, DateTime end, Meeting meeting, TeamChannel channel, IFormFile[] files, string[] attendees);
        Task RemoveMeetingEvent(string eventId, string teamId, bool removeNotePage = true);
    }
}

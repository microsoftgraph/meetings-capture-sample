using Microsoft.Graph;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MeetingCaptureWebApp.Services
{
    public interface INotesService
    {
        Task<OnenotePage> AddNotes(string teamId, string channelSectionId, string meetingName, string notes);
        Task<(OnenotePage meetingNotes, string content)> GetMeetingNotes(string teamId, string pageId);
        Task RemoveNotes(string teamId, string pageId);
        Task<OnenoteSection> GetChannelSection(string teamId, string channelDisplayName);
    }
}

using Microsoft.Graph;
using System.Collections.Generic;

namespace MeetingCaptureWebApp.Models
{
    public class FollowUpMeetingsViewModel
    {
        public string MeetingTitle { get; set; }
        public string TeamId { get; set; }
        public string ChannelId { get; set; }
        public IEnumerable<string> Agendas { get; set; }
        public IEnumerable<Attendee> Attendees { get; set; }
        public IEnumerable<DriveItem> Attachments { get; set; }
        public string Start { get; set; }
        public string End { get; set; }
        public string PlannerId { get; set; }
        public string BucketId { get; set; }
        public string NoteContent { get; set; }
    }
}

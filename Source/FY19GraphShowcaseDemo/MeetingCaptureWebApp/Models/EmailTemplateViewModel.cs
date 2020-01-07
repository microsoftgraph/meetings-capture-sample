using Microsoft.Graph;
using System;
using System.Collections.Generic;

namespace MeetingCaptureWebApp.Models
{
    public class EmailTemplateViewModel
    {
        public string Title { get; set; }

        public string MeetingDate { get; set; }
        
        public IEnumerable<string> Agendas { get; set; }

        public IEnumerable<DriveItem> Attachments { get; set; }

        public IEnumerable<User> Users { get; set; }

        public IEnumerable<TaskViewModel> Tasks { get; set; }

        public DateTimeOffset Start { get; set; }

        public DateTimeOffset End { get; set; }

        public string NoteContent { get; set; }

        public string NoteUri { get; set; }

        public string JoinUrl { get; set; }
    }
}

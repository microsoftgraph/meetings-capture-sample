using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MeetingCaptureWebApp.Data
{
    public class Meeting
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string EventId { get; set; }
        public string TeamId { get; set; }
        public string ChannelId { get; set; }
        public string FolderId { get; set; }
        public string BucketId { get; set; }
        public string NoteId { get; set; }
        public string NoteTitle { get; set; }
        public DateTime? StartTime { get; set; }

        [Required]
        public ICollection<Agenda> Agendas { get; set; }
        [Required]
        public ICollection<TaskFile> TaskFiles { get; set; }
        [Required]
        public ICollection<MeetingAttendee> Attendees { get; set; }
    }
}

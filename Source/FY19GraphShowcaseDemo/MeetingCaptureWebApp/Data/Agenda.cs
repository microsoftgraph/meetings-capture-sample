using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MeetingCaptureWebApp.Data
{
    public class Agenda
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Title { get; set; }

        public int MeetingId { get; set; }
        [ForeignKey("MeetingId")]
        public virtual Meeting Meeting { get; set; }
    }
}

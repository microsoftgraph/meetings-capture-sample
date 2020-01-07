using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MeetingCaptureWebApp.Data
{
    public class MeetingAttendee
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public int MeetingId { get; set; }
        [ForeignKey("MeetingId")]
        public virtual Meeting Meeting { get; set; }
    }
}

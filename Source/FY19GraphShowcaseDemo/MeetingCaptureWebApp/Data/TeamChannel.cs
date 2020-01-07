using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MeetingCaptureWebApp.Data
{
    public class TeamChannel
    {
        [Key]
        public string Id { get; set; }
        public string Name { get; set; }
        public string FolderId { get; set; }
        public string OnenoteSectionId { get; set; }
        public string PlanId { get; set; }
    }
}

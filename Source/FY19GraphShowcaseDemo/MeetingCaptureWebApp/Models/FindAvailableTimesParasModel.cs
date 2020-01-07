using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MeetingCaptureWebApp.Models
{
    public class FindAvailableTimesParasModel
    {
        public string[] Mails { get; set; }
        public string StartTime { get; set; }
        public string EndTime { get; set; }
        public int Interval { get; set; }
    }
}

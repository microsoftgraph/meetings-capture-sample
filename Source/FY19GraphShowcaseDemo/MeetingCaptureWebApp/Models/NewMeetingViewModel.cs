using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace MeetingCaptureWebApp.Models
{
    public class NewMeetingViewModel
    {
        public string Subject { get; set; }

        public DateTime Start { get; set; }

        public DateTime End { get; set; }

        public IEnumerable<IFormFile> Attachments { get; set; }

        public string AgendaJSONString
        {
            get => JsonConvert.SerializeObject(Agendas);
            set
            {
                Agendas = JsonConvert.DeserializeObject<IEnumerable<string>>(value);
            }
        }
        internal IEnumerable<string> Agendas { get; set; }

        public string AttendeesJSONString
        {
            get => JsonConvert.SerializeObject(Attendees);
            set
            {
                Attendees = JsonConvert.DeserializeObject<IEnumerable<string>>(value);
            }
        }

        internal IEnumerable<string> Attendees { get; set; }

        public string TeamId { get; set; }

        public string ChannelId { get; set; }

    }
}

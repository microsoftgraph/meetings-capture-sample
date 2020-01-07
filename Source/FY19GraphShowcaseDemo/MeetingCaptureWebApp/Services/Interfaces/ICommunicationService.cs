using System;
using System.Threading.Tasks;

namespace MeetingCaptureWebApp.Services
{
    public interface ICommunicationService
    {
        public Task<string> CreateOnlineMeeting(string subject, DateTime startDateTime, string organizerId);
    }
}

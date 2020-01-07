using System.Threading.Tasks;

namespace MeetingCaptureWebJob
{
    public interface IEmailService
    {
        Task SendEmailAsync(string[] emails, string subject, string message);
    }
}
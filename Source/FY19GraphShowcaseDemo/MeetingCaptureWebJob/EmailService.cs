using Microsoft.Extensions.Options;
using Newtonsoft.Json.Linq;
using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace MeetingCaptureWebJob
{
    public class EmailService : IEmailService
    {
        public EmailService(IOptions<LogicAppSenderOptions> optionsAccessor)
        {
            Options = optionsAccessor.Value;
        }
        public LogicAppSenderOptions Options { get; } //set only via Secret Manager
        public async Task SendEmailAsync(string[] mailTo, string subject, string mailContent)
        {
            var slideUpdateNotificationLogicAppTriggerUri =
                 new Uri(Options.TriggerUri);
            HttpClient httpClient = new HttpClient();
            var postData = (dynamic)new JObject();
            postData.mailto = String.Join(';',mailTo);
            postData.subject = subject;
            postData.body = mailContent;

            var content = new StringContent(
                postData.ToString(),
                Encoding.UTF8,
                "application/json");

            var response = await httpClient.PostAsync(
                slideUpdateNotificationLogicAppTriggerUri,
                content);

            try
            {
                response.EnsureSuccessStatusCode();
            }
            catch (HttpRequestException ex)
            {
                ex.ToString();
            }
        }
    }

    public class LogicAppSenderOptions
    {
        public string TriggerUri { get; set; }
    }
}

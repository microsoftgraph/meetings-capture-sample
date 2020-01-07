using MeetingCaptureWebApp.Data;
using MeetingCaptureWebApp.Helpers;
using MeetingCaptureWebApp.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using static MeetingCaptureWebJob.EmailService;

namespace MeetingCaptureWebJob
{
    class Program
    {
        static async Task Main(string[] args)
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddEnvironmentVariables()
                .Build();

            //services DI
            var services = new ServiceCollection();
            services.AddTransient<IEmailService, EmailService>();
            services.AddTransient<IMeetingDBService, MeetingDBService>();
            services.AddDbContext<ShowCaseDbContext>(item => item.UseSqlServer(config.GetConnectionString("DefaultConnection")));
            services.Configure<LogicAppSenderOptions>(options => config.GetSection("LogicAppEmailSettings").Bind(options));

            var serviceProvider = services.BuildServiceProvider();

            var mailService = serviceProvider.GetService<IEmailService>();
            var meetingService = serviceProvider.GetService<IMeetingDBService>();

            var jobIntervalMin = config.GetValue<int>("JobIntervalMin");
            var jobAdvanceMin = config.GetValue<int>("AdvanceMin");
            var jobTimeRangeMin = config.GetValue<int>("TimeRange");
            var orgId = config.GetValue<string>("OriginatorId");
            var endTime = DateTime.Now.AddMinutes(jobAdvanceMin + (jobIntervalMin/2)).RoundUp(TimeSpan.FromMinutes(jobTimeRangeMin));
            var startTime = endTime.AddMinutes(0 - jobTimeRangeMin);
            
            Console.WriteLine($"Advance meeting: {jobAdvanceMin} min");
            Console.WriteLine($"Job time range: {jobTimeRangeMin} min");
            Console.WriteLine($"Send notification from {startTime} to {endTime}");
            Console.WriteLine($"Originator Id: {orgId}");

            var meetings = await meetingService.GetMeetingByTimeRange(startTime, endTime);
            foreach (var meeting in meetings)
            {
                try
                {
                    var mailBody = meetingService.GenerateMeetingHtmlMeetingBody(meeting, orgId);
                    await mailService.SendEmailAsync(meeting.Attendees.Select(o => o.Email).ToArray(), $"{meeting.StartTime.Value.ToString("yyyy-MM-dd")} pre-session documents", mailBody);
                    Console.WriteLine($"Create mail for meeting id {meeting.Id} successful.");
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"Create mail for meeting id {meeting.Id} failed. {ex}");
                }
            }
            Console.WriteLine("Job finished");
        }
    }
}

using MeetingCaptureWebApp.Data;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MeetingCaptureWebApp.Services
{
    public class MeetingDBService : IMeetingDBService
    {
        private readonly ShowCaseDbContext _showCaseDbContext;

        public MeetingDBService(ShowCaseDbContext showCaseDbContext)
        {
            _showCaseDbContext = showCaseDbContext;
        }

        public async Task<int> AddChannel(TeamChannel teamChannel)
        {
            _showCaseDbContext.TeamChannels.Add(teamChannel);
            return await _showCaseDbContext.SaveChangesAsync();
        }

        public async Task<int> AddMeeting(Meeting meeting)
        {
            _showCaseDbContext.Meetings.Add(meeting);
            return await _showCaseDbContext.SaveChangesAsync();
        }

        public async Task<int> UpdateMeeting(Meeting meeting)
        {
            _showCaseDbContext.Entry(meeting).State = EntityState.Modified;
            return await _showCaseDbContext.SaveChangesAsync();
        }

        public async Task DeleteMeeting(Meeting meeting)
        {
            _showCaseDbContext.Meetings.Remove(meeting);
            await _showCaseDbContext.SaveChangesAsync();
        }

        public string GenerateMeetingHtmlMeetingBody(Meeting meeting, string ogId)
        {
            string json = "";
            foreach (var file in meeting.TaskFiles)
            {
                var textBlock = new
                {
                    type = "TextBlock",
                    text = file.Name
                };
                var actionSet = new
                {
                    type = "ActionSet",
                    actions = new[] {
                        new {
                            type = "Action.OpenUrl",
                            title = "View",
                            url = file.Location
                        }
                    }
                };
                json += $"{JsonConvert.SerializeObject(textBlock)},{JsonConvert.SerializeObject(actionSet)},";
            }
            var body = @"<html>
<head>
    <meta http-equiv='Content-Type' content='text/html; charset=utf-8'>
    <script type='application/adaptivecard+json'>
        {
        'type': 'AdaptiveCard',
        'originator': '{0}',
        'version': '1.0',
        'hideOriginalBody': true,
        'body': [
        {
        'type': 'TextBlock',
        'size': 'Medium',
        'weight': 'Bolder',
        'text': 'Upcoming Meeting Preread Tasks'
        },
        {
        'type': 'TextBlock',
        'text': 'You have an upcoming meeting that requires you to review documents for. Here is a list of the documents you will need to read.',
        'wrap': true
        },
        {1}
        ]
        }
    </script>
</head>
<body>
    Visit the <a href='https://docs.microsoft.com/outlook/actionable-messages'>Outlook Dev Portal</a> to learn more about Actionable Messages.
</body>
</html>".Replace("{0}", ogId).Replace("{1}", json);
            return body;
        }

        public async Task<TeamChannel> GetChannelById(string channelId)
        {
            return await _showCaseDbContext.TeamChannels.FirstOrDefaultAsync(o => o.Id == channelId);
        }

        public async Task<Meeting> GetMeetingByEventId(string eventId)
        {
            return await _showCaseDbContext.Meetings.Include(o => o.Agendas).Include(o => o.TaskFiles).Include(o => o.Attendees).Where(o => o.EventId == eventId).FirstOrDefaultAsync();
        }

        public async Task<Meeting> GetMeetingById(int id)
        {
            return await _showCaseDbContext.Meetings.Include(o => o.Agendas).Include(o => o.TaskFiles).Include(o => o.Attendees).Where(o => o.Id == id).FirstOrDefaultAsync();
        }
        
        public async Task<IList<Meeting>> GetMeetingByTimeRange(DateTime startTime, DateTime endTime)
        {
            return await _showCaseDbContext.Meetings.Include(o => o.TaskFiles).Include(o => o.Attendees).Where(o => o.StartTime.HasValue && o.StartTime.Value >= startTime && o.StartTime.Value < endTime).ToListAsync();
        }

        public IList<Meeting> ListMeetings(string teamId, string channelId)
        {
            return _showCaseDbContext.Meetings.Where(o => o.TeamId == teamId && o.ChannelId == channelId).ToList();
        }

        public async Task<int> UpdateMeeting(Meeting meeting, IList<MeetingAttendee> meetingAttendees, IList<TaskFile> taskFiles)
        {
            _showCaseDbContext.Meetings.Update(meeting);
            _showCaseDbContext.Attendees.AddRange(meetingAttendees);
            _showCaseDbContext.TaskFiles.AddRange(taskFiles);
            return await _showCaseDbContext.SaveChangesAsync();
        }
    }
}

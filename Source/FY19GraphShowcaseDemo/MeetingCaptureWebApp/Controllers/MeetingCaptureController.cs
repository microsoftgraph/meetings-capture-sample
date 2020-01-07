using MeetingCaptureWebApp.Models;
using MeetingCaptureWebApp.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Graph;
using Microsoft.Graph.Extensions;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;

namespace MeetingCaptureWebApp.Controllers
{
    public class MeetingCaptureController : Controller
    {
        private readonly IUserService _userService;
        private readonly ICalendarService _calendarService;
        private readonly IMeetingService _meetingService;
        private readonly IMeetingDBService _meetingDBService;
        private readonly IFileService _fileService;
        private readonly IPlanTaskService _planTaskService;
        private readonly INotesService _notesService;
        private readonly IViewRenderService _viewRenderService;

        public MeetingCaptureController(
            IUserService userService,
            ICalendarService calendarService,
            IMeetingService meetingService,
            IMeetingDBService meetingDBService,
            IFileService fileService,
            IPlanTaskService planTaskService,
            INotesService notesService,
            IViewRenderService viewRenderService)
        {
            _userService = userService;
            _calendarService = calendarService;
            _meetingService = meetingService;
            _meetingDBService = meetingDBService;
            _fileService = fileService;
            _planTaskService = planTaskService;
            _notesService = notesService;
            _viewRenderService = viewRenderService;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult NewMeeting()
        {
            return View();
        }

        public IActionResult UpcomingMeetings()
        {
            return View();
        }
        public async Task<IActionResult> FollowUpMeeting([FromQuery]string eventId, [FromQuery]string teamId)
        {
            var model = new FollowUpMeetingsViewModel();
            var meetingEvent = await _calendarService.GetEvent(teamId, eventId);
            var channelId = meetingEvent.Extensions[0].AdditionalData["channelId"]?.ToString();
            var meetingId = Convert.ToInt32(meetingEvent.Extensions[0].AdditionalData["meetingId"]);
            var bucketId = meetingEvent.Extensions[0].AdditionalData["bucketId"];
            var meeting = await _meetingDBService.GetMeetingById(meetingId);
            var channelInfo = await _meetingService.CreateOrGetChannelInfo(channelId, teamId);

            model.MeetingTitle = meetingEvent.Subject;
            model.Attendees = meetingEvent.Attendees;
            model.Start = meetingEvent.Start.ToDateTimeOffset().ToUnixTimeMilliseconds().ToString();
            model.End = meetingEvent.End.ToDateTimeOffset().ToUnixTimeMilliseconds().ToString();
            model.Attachments = await _fileService.GetFiles(teamId, meeting.FolderId);
            model.TeamId = teamId;
            model.Agendas = meeting.Agendas?.Select(i => i.Title);
            model.BucketId = meeting.BucketId;
            model.PlannerId = channelInfo.PlanId;
            model.ChannelId = channelId;
            if (!string.IsNullOrEmpty(meeting.NoteId))
            {
                var (meetingNotes, content) = await _notesService.GetMeetingNotes(teamId, meeting.NoteId);
                model.NoteContent = content;
            }

            return View(model);
        }

        public async Task<IActionResult> GetRelevancePeople(string teamId)
        {
            var attendees = await _userService.GetRelevancePeople(teamId);
            var me = await _userService.Me();
            var results = attendees.Where(m => m.ScoredEmailAddresses != null && m.ScoredEmailAddresses.Count() > 0).Select(m => new
            {
                mail = m.ScoredEmailAddresses.First().Address
            }).ToList();

            if (!results.Any(o => o.mail == me.Mail))
            {
                results.Add(new
                {
                    mail = me.Mail
                });
            }

            return Json(results);
        }

        [HttpPost]
        public async Task<IActionResult> FindAvailableTimes([FromBody] FindAvailableTimesParasModel model)
        {
            var result = await _calendarService.SearchAvailableTime(model.Mails, model.StartTime, model.EndTime, model.Interval);

            return Json(result.Select(x => new
            {
                scheduleId = x.ScheduleId,
                availabilityView = x.AvailabilityView
            }));
        }

        [HttpPost]
        public async Task<IActionResult> CreateMeeting([FromForm]NewMeetingViewModel model)
        {
            var channel = await _meetingService.CreateOrGetChannelInfo(model.ChannelId, model.TeamId);
            var meeting = await _meetingService.InitializeMeeting(
                model.Subject,
                model.TeamId,
                channel,
                model.Start,
                model.Agendas.ToArray());

            await _meetingService.SetupMeetingEvent(
                model.Subject,
                model.Start,
                model.End,
                meeting,
                channel,
                model.Attachments?.ToArray(),
                model.Attendees?.ToArray());

            return Ok();
        }

        [HttpPost]
        public async Task<IActionResult> UpdateNotes([FromForm] FollowUpMeetingsViewModel model, [FromQuery]string eventId, [FromQuery]string teamId)
        {
            var channel = await _meetingDBService.GetChannelById(model.ChannelId);
            var meeting = await _meetingDBService.GetMeetingByEventId(eventId);

            if (!string.IsNullOrEmpty(meeting.NoteId))
                await _notesService.RemoveNotes(teamId, meeting.NoteId);
            
            var notePage = await _notesService.AddNotes(teamId, channel.OnenoteSectionId, meeting.NoteTitle, model.NoteContent);
            
            meeting.NoteId = notePage.Id;
            await _meetingDBService.UpdateMeeting(meeting);

            return Ok();
        }

        [HttpPost]
        public async Task<IActionResult> Publish([FromQuery]string eventId, [FromQuery]string teamId)
        {
            var mailTemplateModel = new EmailTemplateViewModel();
            var meetingEvent = await _calendarService.GetEvent(teamId, eventId);
            var channelId = meetingEvent.Extensions[0].AdditionalData["channelId"]?.ToString();
            var bucketId = meetingEvent.Extensions[0].AdditionalData["bucketId"]?.ToString();
            var meetingId = Convert.ToInt32(meetingEvent.Extensions[0].AdditionalData["meetingId"]);
            var meeting = await _meetingDBService.GetMeetingById(meetingId);
            List<User> users = new List<User>();
            var to = new List<string>();

            mailTemplateModel.Title = meetingEvent.Subject;
            mailTemplateModel.Agendas = meeting.Agendas?.Select(i => i.Title);
            mailTemplateModel.Users = users;
            mailTemplateModel.Attachments = await _fileService.GetFiles(teamId, meeting.FolderId);
            mailTemplateModel.Start = DateTimeOffset.Parse(meetingEvent.Start.DateTime, null, DateTimeStyles.AssumeUniversal);
            mailTemplateModel.End = DateTimeOffset.Parse(meetingEvent.End.DateTime, null, DateTimeStyles.AssumeUniversal);

            foreach (var email in meetingEvent.Attendees.Select(i => i.EmailAddress.Address))
            {
                to.Add(email);
                users.Add(await _userService.GetUserByEmail(email));
            }

            if (bucketId != null)
            {
                var tasks = new List<TaskViewModel>();
                var planTasks = await _planTaskService.GetTasksByBucket(bucketId);
                foreach (var task in planTasks)
                {
                    if (task.Assignments.Count() == 0)
                        continue;

                    var assignedTo = await _userService.GetUserByEmail(task.Assignments.First().Key);
                    tasks.Add(new TaskViewModel
                    {
                        Title = task.Title,
                        DueDate = task.DueDateTime?.UtcDateTime.ToString("MMM dd"),
                        AssignedTo = assignedTo.DisplayName,
                        Completed = task.CompletedBy == null ? false : true
                    });
                    to.Add(assignedTo.Mail);
                }
                mailTemplateModel.Tasks = tasks;
            }

            if (!string.IsNullOrEmpty(meeting.NoteId))
            {
                var (meetingNotes, content) = await _notesService.GetMeetingNotes(teamId, meeting.NoteId);
                mailTemplateModel.NoteContent = content;
                mailTemplateModel.NoteUri = meetingNotes == null ? "" : meetingNotes.Links.OneNoteWebUrl?.Href;
            }
            // send mail
            var emailContent = await _viewRenderService.RenderToStringAsync("Templates/MeetingCreated", mailTemplateModel);
            string notePageName = $"{meetingEvent.Subject} - {meetingEvent.Start.ToDateTimeOffset().UtcDateTime.ToString("MM/dd/yyyy")}";
            await _userService.SendMail(notePageName, to.Distinct().ToArray(), emailContent);

            return Ok();
        }

        public async Task<IActionResult> GetUpcomingEvents([FromQuery]string teamId, [FromQuery]string channelId)
        {
            var events = await _calendarService.GetUpcomingLatestMeeting(teamId, channelId);

            var result = new
            {
                count = events.Count()
            };

            return Json(result);
        }
    }
}
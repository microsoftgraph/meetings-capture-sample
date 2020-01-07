using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MeetingCaptureWebApp.Data;
using MeetingCaptureWebApp.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.CodeAnalysis.Options;
using Microsoft.EntityFrameworkCore;
using Microsoft.Graph;
using Microsoft.Graph.Extensions;
using Newtonsoft.Json;
using System.IO;
using MeetingCaptureWebApp.Helpers;

namespace MeetingCaptureWebApp.Services
{
    public class MeetingService : BaseGraphService, IMeetingService
    {
        private readonly IMeetingDBService _meetingDBService;
        private readonly IFileService _fileService;
        private readonly ICalendarService _calendarService;
        private readonly IPlanTaskService _planTaskService;
        private readonly IViewRenderService _viewRenderService;
        private readonly INotesService _notesService;
        private readonly IUserService _userService;
        private readonly ICommunicationService _communicationService;

        public MeetingService(IMeetingDBService meetingDBService,
            IFileService fileService,
            ICalendarService calendarService,
            IPlanTaskService planTaskService,
            IViewRenderService viewRenderService,
            IUserService userService,
            ICommunicationService communicationService,
            INotesService notesService,
            IGraphSdkHelper graphSdkHelper):base(graphSdkHelper)
        {
            _meetingDBService = meetingDBService;
            _fileService = fileService;
            _calendarService = calendarService;
            _planTaskService = planTaskService;
            _viewRenderService = viewRenderService;
            _notesService = notesService;
            _userService = userService;
            _communicationService = communicationService;
        }

        public async Task<Meeting> InitializeMeeting(string title, string teamId, TeamChannel channel, DateTime date, string[] agendas)
        {
            var folder = await _fileService.CreateMeetingFolder(teamId, channel.FolderId, $"{title}-{date.ToString("yyyy-MM-dd")}");
            var bucket = await _planTaskService.CreateBucket(channel.PlanId, $"{title}-{date.ToString("yyyy-MM-dd")}");

            var meeting = new Meeting()
            {
                TeamId = teamId,
                ChannelId = channel.Id,
                FolderId = folder.Id,
                BucketId = bucket.Id,
                StartTime = date,
                NoteTitle = $"{title} - {date.ToString("MM/dd/yyyy")}",
                Agendas = agendas.Select(o => new Agenda() { Title = o }).ToList()
            };

            await _meetingDBService.AddMeeting(meeting);
            return meeting;
        }

        public async Task<Meeting> SetupMeetingEvent(string title, DateTime start, DateTime end, Meeting meeting, TeamChannel channel, IFormFile[] files, string[] attendees)
        {
            var attachments = new List<DriveItem>();

            var meetingAttendees = new List<MeetingAttendee>();
            var taskFiles = new List<TaskFile>();

            if (files != null && files.Length > 0)
            {
                
                var users = new List<User>();

                foreach (var attendee in attendees)
                {
                    var graphUser = await _userService.GetUserByEmail(attendee);
                    users.Add(graphUser);

                    meetingAttendees.Add(new MeetingAttendee
                    {
                        Email = attendee,
                        Name = graphUser.UserPrincipalName,
                        MeetingId = meeting.Id
                    });
                }

                foreach (var file in files)
                {
                    using (var fileStram = file.OpenReadStream())
                    {
                        var uploadFile = await _fileService.UploadFile(meeting.TeamId, meeting.FolderId, file.FileName, fileStram);
                        attachments.Add(uploadFile);
                        await _planTaskService.CreatePreReadTaskForEachUser(channel.PlanId, meeting.BucketId, $"[Pre-reading] {file.FileName}", uploadFile, start, users.Select(i => i.Id).ToArray());

                        taskFiles.Add(new TaskFile
                        {
                            Location = uploadFile.WebUrl,
                            Name = uploadFile.Name,
                            MeetingId = meeting.Id
                        });
                    }
                }
            }

            var joinUrl = await _communicationService.CreateOnlineMeeting(title, start, (await _userService.Me()).Id);

            var model = new EmailTemplateViewModel()
            {
                Agendas = meeting.Agendas.Select(a => a.Title),
                Attachments = attachments,
                JoinUrl = joinUrl
            };

            var emailContent = await _viewRenderService.RenderToStringAsync("Templates/Invitation", model);

            var meetingEvent = await _calendarService.CreateEvent(title,
                    DateTimeTimeZone.FromDateTime(start),
                    DateTimeTimeZone.FromDateTime(end),
                    emailContent,
                    attendees.Select(mail =>
                        new Attendee
                        {
                            EmailAddress = new EmailAddress { Address = mail },
                            Type = AttendeeType.Required
                        }),
                    meeting,
                    meeting.BucketId);

            meeting.EventId = meetingEvent.Id;
            await _meetingDBService.UpdateMeeting(meeting, meetingAttendees, taskFiles);

            return meeting;
        }

        public async Task<TeamChannel> CreateOrGetChannelInfo(string channelId, string teamId)
        {
            var teamChannel = await _meetingDBService.GetChannelById(channelId);
            if (teamChannel == null)
            {
                var channel = await GraphClient.Teams[teamId].Channels[channelId].Request().GetAsync();
                var plan = await _planTaskService.GetOrCreatePlanByChannel(teamId, channelId);
                var channelFolder = await _fileService.GetChannelFolder(teamId, channelId);
                var noteSection = await _notesService.GetChannelSection(teamId, channel.DisplayName);

                teamChannel = new TeamChannel
                {
                    Id = channel.Id,
                    Name = channel.DisplayName,
                    PlanId = plan.Id,
                    OnenoteSectionId = noteSection.Id,
                    FolderId = channelFolder.Id
                };
                await _meetingDBService.AddChannel(teamChannel);
            }
            return teamChannel;
        }

        public async Task RemoveMeetingEvent(string eventId, string teamId, bool removeNotePage = true)
        {
            var meeting = await _meetingDBService.GetMeetingByEventId(eventId);
            
            var existedInDb = (meeting != null);
            if (!existedInDb && !string.IsNullOrEmpty(teamId))
            {
                var meetingEvent = await _calendarService.GetEvent(teamId, eventId);
                if (meetingEvent == null)
                {
                    return;
                }
                meeting = new Meeting
                {
                    Id = Convert.ToInt32(meetingEvent.Extensions[0].AdditionalData["meetingId"]),
                    ChannelId = meetingEvent.Extensions[0].AdditionalData["channelId"]?.ToString(),
                    BucketId = meetingEvent.Extensions[0].AdditionalData["bucketId"]?.ToString(),
                    TeamId = teamId
                };
            }

            if (!string.IsNullOrEmpty(meeting.FolderId))
            {
                await _fileService.DeleteItems(meeting.TeamId, meeting.FolderId);
            }
            if (!string.IsNullOrEmpty(meeting.BucketId))
            {
                await _planTaskService.DeleteBucket(meeting.BucketId);
            }
            if (!string.IsNullOrEmpty(meeting.TeamId))
            {
                await _calendarService.DeleteEventById(meeting.TeamId, eventId);
            }

            if (removeNotePage && !string.IsNullOrEmpty(meeting.NoteId))
            {
                await _notesService.RemoveNotes(meeting.TeamId, meeting.NoteId);
            }

            if (existedInDb)
            {
                await _meetingDBService.DeleteMeeting(meeting);
            }
        }
    }
}

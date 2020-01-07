using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MeetingCaptureWebApp.Models;
using MeetingCaptureWebApp.Services;

namespace MeetingCaptureWebApp.Controllers
{
    public class TabController : Controller
    {
        private readonly IMeetingService _meetingService;
        public TabController(IMeetingService meetingService)
        {
            _meetingService = meetingService;
        }

        [Route("configure")]
        public IActionResult Configure()
        {
            return View();
        }
        [Route("DeleteEvents")]
        public IActionResult DeleteEvents()
        {
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> DeleteMeeting([FromQuery]string eventId, [FromQuery]string teamId)
        {
            await _meetingService.RemoveMeetingEvent(eventId, teamId, true);
            return Ok();
        }
    }
}
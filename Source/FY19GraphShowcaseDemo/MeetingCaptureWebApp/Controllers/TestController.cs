using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using MeetingCaptureWebApp.Helpers;
using MeetingCaptureWebApp.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace MeetingCaptureWebApp.Controllers
{
    public class TestController : Controller
    {
        private readonly IGraphSdkHelper _graphSdkHelper;
        private readonly INotesService _notesService;

        public TestController(IGraphSdkHelper graphSdkHelper, INotesService notesService)
        {
            _graphSdkHelper = graphSdkHelper;
            _notesService = notesService;
        }

        [Authorize]
        public IActionResult Index(string email)
        {
            if (User.Identity.IsAuthenticated)
            {
                //ViewData["Response"] = await GraphService.GetUserJson(, email, HttpContext);
            }

            return View();
        }

        [Authorize]
        public IActionResult MgtTest()
        {
            return View();
        }
    }
}
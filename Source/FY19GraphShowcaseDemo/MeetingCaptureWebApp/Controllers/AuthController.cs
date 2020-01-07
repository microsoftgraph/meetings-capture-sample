using MeetingCaptureWebApp.Helpers;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MeetingCaptureWebApp.Controllers
{
    public class AuthController : Controller
    {
        private readonly IGraphSdkHelper _graphSdkHelper;
        public AuthController(IGraphSdkHelper graphSdkHelper)
        {
            _graphSdkHelper = graphSdkHelper;
        }

        [HttpPost]
        public IActionResult UpdateCachedAssertion([FromQuery] string userObjectId)
        {
            _graphSdkHelper.UpdateAssertion(userObjectId);
            return Ok();
        }

    }
}

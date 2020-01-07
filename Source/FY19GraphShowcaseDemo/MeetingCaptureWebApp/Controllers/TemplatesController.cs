using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace MeetingCaptureWebApp.Controllers
{
    public class TemplatesController : Controller
    {
        public IActionResult Invitation()
        {
            return View();
        }

        public IActionResult MeetingCreated()
        {
            return View();
        }

        public static string GetAbbreviation(string displayName)
        {
            if (displayName.Split(' ').Length >= 2)
            {
                var array = displayName.Split(' ');

                return array[0].First().ToString().ToUpper() + array[1].First().ToString().ToUpper();
            }

            return displayName.Substring(0, 2).ToUpper();
        }
    }
}
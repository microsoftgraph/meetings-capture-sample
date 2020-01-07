using System.Threading.Tasks;

namespace MeetingCaptureWebApp.Services
{
    public interface IViewRenderService
    {
        Task<string> RenderToStringAsync(string viewName, object model);
    }
}

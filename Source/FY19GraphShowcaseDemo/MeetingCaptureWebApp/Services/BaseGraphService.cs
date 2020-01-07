using MeetingCaptureWebApp.Helpers;
using Microsoft.Graph;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MeetingCaptureWebApp.Services
{
    abstract public class BaseGraphService
    {
        protected readonly IGraphSdkHelper _graphSdkHelper;
        protected GraphServiceClient GraphClient { get; }
        public BaseGraphService(IGraphSdkHelper graphSdkHelper)
        {
            _graphSdkHelper = graphSdkHelper;
            GraphClient = _graphSdkHelper.GetAuthenticatedClient();
        }
    }
}

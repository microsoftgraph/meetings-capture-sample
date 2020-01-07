using Microsoft.Graph;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MeetingCaptureWebApp.Services
{
    public interface IPlanTaskService
    {
        Task<PlannerPlan> GetOrCreatePlanByChannel(string groupId, string channelId);
        Task<PlannerBucket> CreateBucket(string planId, string bucketName);
        Task<IList<PlannerTask>> GetTasksByBucket(string bucketId);
        Task<IList<PlannerTask>> CreatePreReadTaskForEachUser(string planId, string bucketId, string taskTitle, DriveItem uploadFile, DateTime dueDateTime, IEnumerable<string> assigneeIds);
        Task DeleteBucket(string bucketId);
    }
}

using MeetingCaptureWebApp.Helpers;
using Microsoft.Graph;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MeetingCaptureWebApp.Services
{
    public class PlanTaskService : BaseGraphService, IPlanTaskService
    {
        public PlanTaskService(IGraphSdkHelper graphSdkHelper):base(graphSdkHelper)
        {
        }

        private async Task<PlannerPlan> CreatePlan(string groupId, string channelName)
        {
            var plannerPlan = new PlannerPlan()
            {
                Owner = groupId,
                Title = channelName
            };
            return await GraphClient.Planner.Plans.Request().AddAsync(plannerPlan);
        }

        public async Task<PlannerBucket> CreateBucket(string planId, string bucketName)
        {
            var plannerBucket = new PlannerBucket()
            {
                Name = bucketName,
                PlanId = planId
            };
            return await GraphClient.Planner.Buckets.Request().AddAsync(plannerBucket);
        }

        public async Task<PlannerPlan> GetOrCreatePlanByChannel(string groupId, string channelId)
        {
            var channel = await GraphClient.Teams[groupId].Channels[channelId].Request().GetAsync();

            var plans = new List<PlannerPlan>();
            var pagedItems = await GraphClient.Groups[groupId].Planner.Plans.Request().GetAsync();
            plans.AddRange(pagedItems.CurrentPage);
            while (pagedItems.NextPageRequest != null)
            {
                pagedItems = await pagedItems.NextPageRequest.GetAsync();
                plans.AddRange(pagedItems.CurrentPage);
            }

            var retValue = plans.FirstOrDefault(o => o.Title == channel.DisplayName);
            if (retValue == null)
            {
                retValue = await CreatePlan(groupId, channel.DisplayName);
            }

            var plannerPlanDetails = await GraphClient.Planner.Plans[retValue.Id].Details.Request().GetAsync();
            if (string.IsNullOrEmpty(plannerPlanDetails.CategoryDescriptions.Category1) || plannerPlanDetails.CategoryDescriptions.Category1 != "Pre-Read")
            {
                var plannerDetail = new PlannerPlanDetails
                {
                    CategoryDescriptions = new PlannerCategoryDescriptions
                    {
                        Category1 = "Pre-Read",
                        Category2 = "Meeting"
                    }
                };
                await GraphClient.Planner.Plans[retValue.Id].Details.Request().Header("If-Match", plannerPlanDetails.GetEtag()).UpdateAsync(plannerDetail);
            }
            return retValue;
        }

        public async Task<IList<PlannerTask>> CreatePreReadTaskForEachUser(string planId, string bucketId, string taskTitle, DriveItem uploadFile, DateTime dueDateTime, IEnumerable<string> assigneeIds)
        {
            var retValue = new List<PlannerTask>();
            foreach (var assigneeId in assigneeIds)
            {
                var plannerAssignments = new PlannerAssignments();
                plannerAssignments.AddAssignee(assigneeId);

                //Category1 is pre-read task
                var plannerCategories = new PlannerAppliedCategories { Category1 = true };

                var plannerTask = new PlannerTask()
                {
                    PlanId = planId,
                    BucketId = bucketId,
                    Title = taskTitle,
                    AppliedCategories = plannerCategories,
                    DueDateTime = dueDateTime,
                    Assignments = plannerAssignments,
                };

                var task = await GraphClient.Planner.Tasks.Request().AddAsync(plannerTask);
                var taskDetail = await GraphClient.Planner.Tasks[task.Id].Details.Request().GetAsync();

                var references = new PlannerExternalReferences();
                references.AddReference(uploadFile.WebUrl, uploadFile.Name);

                var updateTaskDetail = await GraphClient.Planner.Tasks[task.Id].Details
                    .Request()
                    .Header("If-Match", taskDetail.GetEtag())
                    .UpdateAsync(new PlannerTaskDetails()
                    {
                        References = references
                    });
                retValue.Add(task);
            }
            return retValue;
        }

        public async Task<IList<PlannerTask>> GetTasksByBucket(string bucketId)
        {
            var retValue = new List<PlannerTask>();
            var pagedTasks = await GraphClient.Planner.Buckets[bucketId].Tasks.Request().GetAsync();
            retValue.AddRange(pagedTasks.CurrentPage);
            while (pagedTasks.NextPageRequest != null)
            {
                pagedTasks = await pagedTasks.NextPageRequest.GetAsync();
                retValue.AddRange(pagedTasks.CurrentPage);
            }
            return retValue;
        }

        public async Task DeleteBucket(string bucketId)
        {
            var bucket = await GraphClient.Planner.Buckets[bucketId].Request().GetAsync();
            await GraphClient.Planner
                .Buckets[bucketId]
                .Request()
                .Header("If-Match", bucket.GetEtag())
                .DeleteAsync();
        }
    }
}

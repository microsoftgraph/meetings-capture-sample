using MeetingCaptureWebApp.Helpers;
using Microsoft.AspNetCore.Http;
using Microsoft.Graph;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace MeetingCaptureWebApp.Services
{
    public class FileService : BaseGraphService, IFileService
    {
        public FileService(IGraphSdkHelper graphSdkHelper):base(graphSdkHelper)
        {
        }
        public async Task<DriveItem> CreateMeetingFolder(string groupId, string channelFolderId, string folderName)
        {
            var driveItem = new DriveItem
            {
                Name = folderName,
                Folder = new Folder(),
                AdditionalData = new Dictionary<string, object>
                {
                    { "@microsoft.graph.conflictBehavior", "rename" }
                },
            };
            return await GraphClient.Groups[groupId].Drive.Items[channelFolderId].Children.Request().AddAsync(driveItem);
        }

        public async Task<IList<DriveItem>> GetFiles(string groupId, string folderId)
        {
            var retValue = new List<DriveItem>();
            var pagedFiles = await GraphClient.Groups[groupId].Drive.Items[folderId].Children.Request().GetAsync();
            retValue.AddRange(pagedFiles.CurrentPage);
            while (pagedFiles.NextPageRequest != null)
            {
                pagedFiles = await pagedFiles.NextPageRequest.GetAsync();
                retValue.AddRange(pagedFiles.CurrentPage);
            }
            return retValue;
        }

        public async Task<DriveItem> UploadFile(string groupId, string folderId, string fileName, Stream fileContent)
        {
            return await GraphClient.Groups[groupId].Drive.Items[folderId].ItemWithPath(fileName).Content.Request().PutAsync<DriveItem>(fileContent);
        }

        public async Task<DriveItem> GetChannelFolder(string groupId, string channelId)
        {
            var channel = await GraphClient.Teams[groupId].Channels[channelId].Request().GetAsync();
            return await GraphClient.Groups[groupId].Drive.Root.ItemWithPath(channel.DisplayName).Request().GetAsync();
        }

        public async Task DeleteItems(string groupiId, string itemId)
        {
            await GraphClient.Groups[groupiId].Drive.Items[itemId].Request().DeleteAsync();
        }
    }
}

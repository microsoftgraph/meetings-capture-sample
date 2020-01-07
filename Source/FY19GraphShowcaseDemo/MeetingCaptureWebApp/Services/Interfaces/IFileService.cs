using Microsoft.Graph;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace MeetingCaptureWebApp.Services
{
    public interface IFileService
    {
        Task<DriveItem> GetChannelFolder(string groupId, string channelId);
        Task<DriveItem> CreateMeetingFolder(string groupId, string channelFolderId, string folderName);
        Task<DriveItem> UploadFile(string groupId, string folderId, string fileName, Stream fileContent);
        Task<IList<DriveItem>> GetFiles(string groupId, string folderId);
        Task DeleteItems(string groupiId, string itemId);
    }
}

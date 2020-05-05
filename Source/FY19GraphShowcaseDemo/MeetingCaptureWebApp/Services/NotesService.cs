using MeetingCaptureWebApp.Helpers;
using Microsoft.Graph;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace MeetingCaptureWebApp.Services
{
    public class NotesService : BaseGraphService, INotesService
    {
        public NotesService(IGraphSdkHelper graphSdkHelper) : base(graphSdkHelper)
        {

        }
        public async Task<OnenotePage> AddNotes(string teamId, string channelSectionId, string meetingName, string notes)
        {
            string notesContent = $"<!DOCTYPE html><html><head><title>{meetingName}</title></head><body>{notes}</body></html>";
            return await GraphClient.Groups[teamId].Onenote.Sections[channelSectionId].Pages.Request().AddAsync(notesContent, "text/html");
        }

        public async Task<(OnenotePage meetingNotes, string content)> GetMeetingNotes(string teamId, string pageId)
        {
            var oneNotePage = await GraphClient.Groups[teamId].Onenote.Pages[pageId].Request().GetAsync();
            var content = await GraphClient.Groups[teamId].Onenote.Pages[pageId].Content.Request().GetAsync();
            var reader = new StreamReader(content);
            return (oneNotePage, reader.ReadToEnd());
        }

        public async Task RemoveNotes(string teamId, string pageId)
        {
            await GraphClient.Groups[teamId].Onenote.Pages[pageId].Request().DeleteAsync();
        }

        public async Task<OnenoteSection> GetChannelSection(string teamId, string channelDisplayName)
        {
            var notebooks = await GraphClient.Groups[teamId].Onenote.Notebooks.Request().GetAsync();
            string notebookId = null;
            if (notebooks.Count == 0)
            {
                var notebook = new Notebook
                {
                    DisplayName = Uri.EscapeDataString($"{channelDisplayName.Replace("'", "''")}")
                };
                var rtnNotebook = await GraphClient.Groups[teamId].Onenote.Notebooks.Request().AddAsync(notebook);
                notebookId = rtnNotebook.Id;
            }
            else
            {
                notebookId = notebooks.First().Id;
            }
            return await GetOrCreateOnenoteSectionByChannel(teamId, notebookId, channelDisplayName);
        }

        private async Task<OnenoteSection> GetOrCreateOnenoteSectionByChannel(string teamId, string notebookId, string channelName)
        {
            var sectionsPage = await GraphClient.Groups[teamId].Onenote.Notebooks[notebookId].Sections.Request().Filter(Uri.EscapeDataString($"displayName eq '{channelName.Replace("'", "''")}'")).GetAsync();
            var channelSection = sectionsPage.CurrentPage.FirstOrDefault();
            if (channelSection == null)
            {
                channelSection = new OnenoteSection
                {
                    DisplayName = channelName
                };
                channelSection = await GraphClient.Groups[teamId].Onenote.Notebooks[notebookId].Sections.Request().AddAsync(channelSection);
            }
            return channelSection;
        }
    }
}

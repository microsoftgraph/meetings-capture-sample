var createMeetingDialogHtmlElement = document.getElementById('createMeetingDialog');
var createMeetingDialog = new fabric['Dialog'](createMeetingDialogHtmlElement);

function goToNewMeetingPage() {
    TeamsHelper.get(function (teamContext) {
        location.href = `/MeetingCapture/newMeeting`;
    });
}

(function () {
    TeamsHelper.get(function (teamContext) {
        $.getJSON(`/MeetingCapture/GetUpcomingEvents?teamId=${encodeURIComponent(teamContext.teamId)}&channelId=${encodeURIComponent(teamContext.channelId)}`, function (result) {
            if (result.count > 0) {
                location.href = `/MeetingCapture/upcomingMeetings`;
            }
            else {
                createMeetingDialog.open();
                $('#btnNewMeeting').show();
            }
        });
    });
}());
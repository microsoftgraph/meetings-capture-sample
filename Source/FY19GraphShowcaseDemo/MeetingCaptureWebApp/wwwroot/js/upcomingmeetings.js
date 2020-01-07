var schemaExtesion = "meetingCapture.Extensions";

//template convert function
this.getEventTimeString = this.getEventTimeString.bind(this);
this.getEventAttendees = this.getEventAttendees.bind(this);
this.getEventButtonTitle = this.getEventButtonTitle.bind(this);
//agenda control 
var agendaControl = document.querySelector("mgt-agenda");
agendaControl.templateConverters.eventTimeConverter = this.getEventTimeString;
agendaControl.templateConverters.eventAttendeesConvert = this.getEventAttendees;

TeamsHelper.get(function (teamContext) {
    agendaControl.setAttribute("eventQuery", `/api/MVCGraph/v1.0/groups/${teamContext.teamId}/calendar/events?$expand=Extensions($filter=id eq '${schemaExtesion}')`);
});

//current page
var isDeletePage = document.getElementById("currentPage").value === "DeleteMeetings";
var messageDialogHtmlElement = document.getElementById('MessageDialog');
var messageDialog = messageDialogHtmlElement ? new fabric['Dialog'](messageDialogHtmlElement) : null;


function getEventAttendees(event) {
    let attendees = event.attendees.map(
        attendee =>
            ({
                displayName: attendee.emailAddress.name,
                emailAddresses: [attendee.emailAddress]
            })
    );
    return JSON.stringify(attendees);
}

function getEventButtonTitle(event) {
    if (isDeletePage) {
        return "Delete Meeting";
    }
    else {
        let dateNow = Date.now();
        let start = new Date(event.start.dateTime);
        if (start >= dateNow) {
            return "Launch Meeting";
        }
        else {
            return "Review Meeting";
        }
    }
}

function getEventTimeString(event) {
    if (event.isAllDay) {
        return 'ALL DAY';
    }

    const start = prettyPrintTimeFromDateTime(new Date(event.start.dateTime));
    const end = prettyPrintTimeFromDateTime(new Date(event.end.dateTime));

    return `${start} - ${end}`;
}

function prettyPrintTimeFromDateTime(date) {
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${minutesStr} ${ampm}`;
}

function getDateHeaderFromDateTimeString(dateTimeString) {
    const date = new Date(dateTimeString);
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const dayIndex = date.getDay();
    const monthIndex = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();

    return `${dayNames[dayIndex]}, ${monthNames[monthIndex]} ${day}, ${year}`;
}

function getEventDuration(event) {
    let dtStart = new Date(event.start.dateTime);
    const dtEnd = new Date(event.end.dateTime);
    const dtNow = new Date();
    let result = '';

    if (dtNow > dtStart) {
        dtStart = dtNow;
    }

    const diff = dtEnd.getTime() - dtStart.getTime();
    const durationMinutes = Math.round(diff / 60000);

    if (durationMinutes > 1440 || event.isAllDay) {
        result = Math.ceil(durationMinutes / 1440) + 'd';
    } else if (durationMinutes > 60) {
        result = Math.round(durationMinutes / 60) + 'h';
        const leftoverMinutes = durationMinutes % 60;
        if (leftoverMinutes) {
            result += leftoverMinutes + 'm';
        }
    } else {
        result = durationMinutes + 'm';
    }

    return result;
}

function getMeetings() {
    return new Promise((resolve, reject) => {
        let returnEvents = [];
        TeamsHelper.get(function (teamContext) {
            let teamId = teamContext.teamId;
            let channelId = teamContext.channelId;
            $.getJSON(`/api/MVCGraph/v1.0/groups/${teamId}/calendar/events?$expand=Extensions($filter=id eq '${schemaExtesion}')`, function (ret) {
                let events = ret.value;
                events.forEach(function (event) {
                    var extensions = event.extensions;
                    if (extensions) {
                        if (extensions[0].channelId && extensions[0].channelId === channelId) {
                            returnEvents.push(event);
                        }
                    }
                });
                resolve(returnEvents);
            });
        });

    });
}
function showMessageDialog(message) {
    $('#MessageDialog .ms-Dialog-title').text(message);
    messageDialog.open();
}
function addMeetings() {
    getMeetings().then((events) => {
        agendaControl["events"] = events;
        $("#agendaContainer").removeClass("hide");
        agendaControl.addEventListener('templateRendered', (e) => {
            let templateType = e.detail.templateType;
            let element = e.detail.element;
            if (templateType === 'event') {
                element.querySelector('.eventButton button').addEventListener('click', () => {
                    if (isDeletePage) {
                        TeamsHelper.get(function (teamContext) {
                        $.ajax({
                            url: `/Tab/DeleteMeeting?eventId=${e.detail.context.event.id}&teamId=${teamContext.teamId}`,
                            type: 'POST',
                            success: function () {
                                e.detail.element.remove();
                            },
                            error: function (req, error) {
                                showMessageDialog(error);
                            }
                        });
                        });
                    }
                    else {
                        TeamsHelper.get(function (teamContext) {
                            $.ajax({
                                url: `/Auth/UpdateCachedAssertion?userObjectId=${teamContext.userObjectId}`,
                                type: 'POST',
                                success: function () {
                                    location.href = `/MeetingCapture/followUpMeeting?eventId=${e.detail.context.event.id}&teamId=${teamContext.teamId}&userObjectId=${teamContext.userObjectId}`;
                                },
                                error: function (req, error) {
                                    showMessageDialog(error);
                                }
                            });
                        });
                    }
                });
            }
        });
    });
}
$(function () {
    setTimeout(() => {
        addMeetings();
    }, 2000);

    $("#createMeetingContainer button").click(() => {
        TeamsHelper.get(function (teamContext) {
            location.href = `/MeetingCapture/NewMeeting`;
        });
    });
});


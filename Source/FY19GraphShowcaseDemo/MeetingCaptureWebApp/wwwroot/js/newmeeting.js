// MS Fabric DatePicker control
var datePickerHtmlElements = document.querySelectorAll(".ms-DatePicker");
var datePickerControl;

// MS Fabric Dropdown control
var durationDropdownHtmlElement = document.getElementById("ddlDuration");
var durationControl;

// MS Fabric Dialog
var findTimeDialogHtmlElement = document.getElementById('findTimeDialog');
var findTimeDialog = new fabric['Dialog'](findTimeDialogHtmlElement);
var messageDialogHtmlElement = document.getElementById('MessageDialog');
var messageDialog = new fabric['Dialog'](messageDialogHtmlElement);
var lodingDialogHtmlElement = document.getElementById('lodingDialog');
var lodingDialog = new fabric['Dialog'](lodingDialogHtmlElement);

// AgendaControl
var agendaControl = `<div class="agenda-item">
            <div class="ms-TextField"><input class= "ms-TextField-field" type="text"></div>
            <div class="agenda-action">
                <button class="ms-Button ms-Button--hero">
                    <span class="ms-Button-icon"><i class="ms-Icon ms-Icon--ChromeClose"></i></span>
                </button>
            </div>
        </div >`;

// MS Fabric Spinner
var SpinnerElements = document.querySelectorAll(".ms-Spinner");
for (var i = 0; i < SpinnerElements.length; i++) {
    new fabric['Spinner'](SpinnerElements[i]);
}

function initDatePickerControls() {
    datePickerControl = new fabric['DatePicker'](datePickerHtmlElements, {
        onSet: function (value) {
            if (moment(value.select).isAfter(moment(), 'day')) {
                $('#btnFindTimes').prop('disabled', false);
            }
            else if (moment(datePickerControl.picker.get()).isSame(moment(), 'day')
                && moment().add(30, "minute") < moment().set({ hour: 16, minute: 30, second: 0, millisecond: 0 })) {
                $('#btnFindTimes').prop('disabled', false);
            }
            else {
                $('#btnFindTimes').prop('disabled', true);
            }
        }
    });
    datePickerControl.picker.set('select', [moment().add(1, 'days').year(), moment().add(1, 'days').month(), moment().add(1, 'days').date()]);
}

function initDropDownControls() {
    durationControl = new fabric['Dropdown'](durationDropdownHtmlElement);
}

function appendAgendasControl() {
    $(agendaControl).insertBefore($("#btnAddAgendaItem")).find("button").on("click", function () {
        $(this).parentsUntil("#agendaList").last().remove();
    });
}

function initAgendasControls() {
    let i = 0;
    while (i < 3) {
        appendAgendasControl();
        i++;
    }
}

function setSelectedItem(timeSlot, index, dropdownHtmlElement) {
    dropdownHtmlElement.querySelector('select').selectedIndex = index;
    dropdownHtmlElement.querySelectorAll('.ms-Dropdown-title').forEach(function (element) {
        element.innerHTML = timeSlot;
    });
    dropdownHtmlElement.querySelectorAll('.ms-Dropdown-item')[index].classList.add('is-selected');
}

function uploadFiles() {
    let fileControl = $(this);
    let file = $(this)[0].files[0];
    let fileIconHtml;

    if (file.size >= 4194304) {
        showMessageDialog("The SharePoint upload document API used in this sample can only upload files less than 4MB. For files larger than 4MB, a more complicated method is needed, it is explained <a target='_blank' href ='https://docs.microsoft.com/en-us/graph/api/driveitem-put-content?view=graph-rest-1.0&tabs=http'>here</a>.");
        return;
    }

    if (file.name.search(/docx/i) != -1) {
        fileIconHtml = '<div class="ms-BrandIcon--icon48 ms-BrandIcon--word" />';
    }
    else if (file.name.search(/xlsx/i) != -1) {
        fileIconHtml = '<div class="ms-BrandIcon--icon48 ms-BrandIcon--excel" />';
    }
    else if (file.name.search(/pptx/i) != -1) {
        fileIconHtml = '<div class="ms-BrandIcon--icon48 ms-BrandIcon--powerpoint" />';
    }
    else {
        fileIconHtml = '<div class="ms-BrandIcon--icon48 ms-BrandIcon--genericfile" />';
    }

    $(`<div class="file-item">
        ${fileIconHtml}
        <div class="file-info">
            <div class="file-title">${file.name}</div>
            <div class="file-date">${moment(file.lastModified).format("MMM [at] h:mma")}</div>
        </div>
        <div class="file-action">
            <button class="ms-Button ms-Button--hero">
                <span class="ms-Button-icon"><i class="ms-Icon ms-Icon--ChromeClose"></i></span>
            </button>
        </div>
    </div>`).appendTo($('.file-list')).find('button').on('click', function () {
        fileControl.remove();
        $(this).parentsUntil('.file-list').last().remove();
    });
}

function getAgendas() {
    var agendas = [];
    $('#agendaList .ms-TextField-field').filter(function () { return $.trim($(this).val()) !== ''; }).each(function () {
        agendas.push($.trim($(this).val()));
    });

    return JSON.stringify(agendas);
}

function getAttendees() {
    TeamsHelper.get(function (teamContext) {
        $.getJSON(`/MeetingCapture/GetRelevancePeople?teamId=${teamContext.teamId}`, function (persons) {
            persons.forEach(function (item) {
                $(`<div>
                    <mgt-person person-query="${item.mail}" show-name></mgt-person>
                    <button class="ms-Button ms-Button--hero">
                        <span class="ms-Button-icon"><i class="ms-Icon ms-Icon--ChromeClose"></i></span>
                    </button>
                </di>`).appendTo($('.person-list')).find("button").on("click", function () {
                    $(this).parentsUntil('.person-list').last().remove();
                });

                $('mgt-people-picker')[0].removePerson({ id: item.id });
            });
        });
    });
}

function findUnavailability(index, dataItems) {
    var unavailabePersons = [];

    dataItems.forEach(item => {
        if (item.view[index] !== "0") {
            unavailabePersons.push(item.name);
        }
    });

    return unavailabePersons;
}

function showMessageDialog(message) {
    showLoadingDialog(false);
    $('#MessageDialog .ms-Dialog-title').html(message);
    messageDialog.open();
}

function showLoadingDialog(visible) {
    try {
        if (visible) {
            $('#overlay').show();
            lodingDialog.open();
        }
        else {
            $('#overlay').hide();
            lodingDialog.close();
        }
    }
    catch{}
}

function pageInit(teamId, channelId) {

    initDatePickerControls();

    initDropDownControls();

    initAgendasControls();

    getAttendees(teamId);

    $("#btnAddAgendaItem").on('click', function () {
        appendAgendasControl();
    });

    $('#btnBrowser').on('click', function () {
        $('<input type="file" name="files">').appendTo($('#files')).on('change', uploadFiles).trigger("click");
    });

    $('#btnFindTimes').on('click', function () {
        if ($('#btnFindTimes > span').html() == "Reschedule") {
            $('#ddlDuration').show();
            $('#dpDate').show();
            $('#btnFindTimes > span').html("Find available times");
            return;
        }

        var $persons = $('.person-list mgt-person');
        if ($persons.length === 0) return;

        $('#btnFindTimes').prop('disabled', true);

        let mails = $.map($('.person-list mgt-person'), function (a) { return a.personQuery; });
        let start = moment(moment(datePickerControl.picker.get()).format('YYYY-MM-DDT08:00:00'));
        let end = moment(moment(datePickerControl.picker.get()).format('YYYY-MM-DDT17:00:00'));
        let interval = parseInt($('#ddlDuration select').val());

        if (moment(datePickerControl.picker.get()).isSame(moment(), 'day')) {
            if (moment().get('hour') < 16) {
                if (interval == 30 && moment().get('minute') < 30) {
                    start = moment().format('YYYY-MM-DDTHH:30:00');
                }
                else {
                    start = moment().add(1, 'hour').format('YYYY-MM-DDTHH:00:00');
                }
            }
            else {
                start = moment().format('YYYY-MM-DDTHH:30:00');
                interval = 30;
            }
        }
        start = moment(start);
        TeamsHelper.get(function (teamContext) {
            $.ajax({
                method: "POST",
                url: "/MeetingCapture/FindAvailableTimes",
                data: JSON.stringify({
                    StartTime: start.utc().format('YYYY-MM-DDTHH:mm:ss'),
                    EndTime: end.utc().format('YYYY-MM-DDTHH:mm:ss'),
                    Interval: interval,
                    Mails: mails
                }),
                processData: false,
                dataType: "json",
                contentType: "application/json; charset=utf-8"

            })
                .done(function (data) {
                    let $container = $('#findTimeDialog .ms-Dialog-content');
                    let attendeeCount = data.length;
                    let index = 0;
                    $container.html('');
                    start.local();
                    end.local();

                    //add display name
                    let items = data.map(person => {
                        return {
                            name: $(`mgt-person[person-query="${person.scheduleId}"]`)[0].personDetails.displayName,
                            view: person.availabilityView
                        };
                    });

                    while (start < end) {
                        let unAvailable = findUnavailability(index, items);
                        let slotStart = start.format("h:mm a");
                        let slotEnd = start.add(interval, 'minutes').format("h:mm a");
                        $(`<button class="ms-Button ms-Dialog-action ms-Button--compound">
                            <table>
                                <tr>
                                    <td>
                                        <div>${slotStart} - ${slotEnd}</div>
                                        <div>${parseInt((attendeeCount - unAvailable.length) / attendeeCount * 100)}% Availability</div>
                                    </td>
                                    <td>
                                        <div class="${unAvailable.length == 0 ? 'hide' : ''}">
                                            <i class="ms-Icon ms-Icon--PeopleBlock"></i>
                                            Unable to attend
                                        </div>
                                        <div class="unattend">
                                            ${unAvailable.join('; ')}
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </button>`)
                            .appendTo($container)
                            .data('startTime', slotStart)
                            .data('endTime', slotEnd)
                            .on("click", function () {
                                var date = moment(datePickerControl.picker.get());
                                $('#selectedSchedule')
                                    .data('startTime', $(this).data('startTime'))
                                    .data('endTime', $(this).data('endTime'))
                                    .html(date.format("dddd, MMMM, DD, YYYY")
                                        + "<br/>"
                                        + $(this).data('startTime')
                                        + " - "
                                        + $(this).data('endTime'));
                                $('#btnFindTimes > span').html("Reschedule");
                                $('#ddlDuration').hide();
                                $('#dpDate').hide();
                                findTimeDialog.close();
                            });
                        index++;
                    }

                    findTimeDialog.open();

                    $('#btnFindTimes').prop('disabled', false);
                });
        });
    });

    $('#btnSave').on("click", function () {
        $(this).prop('disabled', true);
        showLoadingDialog(true);

        let formData = new FormData();
        let meetingTitle = $('#txtMeetingTitle').val();
        let startDate = `${moment(datePickerControl.picker.get()).format('YYYY-MM-DD')} ${$('#selectedSchedule').data('startTime')}`;
        let endDate = `${moment(datePickerControl.picker.get()).format('YYYY-MM-DD')} ${$('#selectedSchedule').data('endTime')}`;
        let attendees = $.map($('.person-list mgt-person'), function (a) { return a.personQuery; });

        if (meetingTitle === '') {
            showMessageDialog("Meeting title is required.");
            $('#txtMeetingTitle').focus();
            $(this).prop('disabled', false);
            return;
        }

        if (attendees.length == 0) {
            showMessageDialog("Attendee(s) is required.");
            $(this).prop('disabled', false);
            return;
        }

        if ($('#selectedSchedule').data('startTime') == null) {
            showMessageDialog("Meeting date is required.");
            $(this).prop('disabled', false);
            return;
        }

        formData.append("Subject", $('#txtMeetingTitle').val());
        formData.append("Start", moment(startDate).toJSON());
        formData.append("End", moment(endDate).toJSON());
        formData.append("AgendaJSONString", getAgendas());
        formData.append("AttendeesJSONString", JSON.stringify(attendees));
        formData.append("TeamId", teamId);
        formData.append("ChannelId", channelId);

        $('#files input').filter(function () { return $(this).val() !== ''; }).each(function () {
            formData.append("Attachments", $(this)[0].files[0]);
        });
        TeamsHelper.get(function (teamContext) {
            $.ajax({
                url: '/MeetingCapture/CreateMeeting',
                data: formData,
                processData: false,
                contentType: false,
                type: 'POST',
                success: function () {
                    $('#btnSaveDone').click(function () {
                        location.href = `/MeetingCapture/upcomingMeetings`;
                    });
                    showMessageDialog("Your meeting has been created.");
                },
                error: function (req, error) {
                    $(this).prop('disabled', false);
                    showMessageDialog(error);
                }
            });
        });
    });

    $('#btnCancel').on("click", function () {
        location.reload();
    });

    $('#btnAddPerson').on("click", function () {
        var persons = $('mgt-people-picker')[0].selectedPeople;
        persons.forEach(function (item) {
            if ($(`.person-list mgt-person[person-query='${item.userPrincipalName || item.scoredEmailAddresses[0].address}']`).length == 0) {
                $(`<div>
                <mgt-person person-query="${item.userPrincipalName || item.scoredEmailAddresses[0].address}" show-name></mgt-person>
                <button class="ms-Button ms-Button--hero">
                    <span class="ms-Button-icon"><i class="ms-Icon ms-Icon--ChromeClose"></i></span>
                </button>
            </di>`).appendTo($('.person-list')).find("button").on("click", function () {
                    $(this).parentsUntil('.person-list').last().remove();
                });
            }
            $('mgt-people-picker')[0].removePerson({ id: item.id });
        });
    });
}

$(function () {
    TeamsHelper.get(function (teamContext) {
        pageInit(teamContext.teamId, teamContext.channelId);
    });
});
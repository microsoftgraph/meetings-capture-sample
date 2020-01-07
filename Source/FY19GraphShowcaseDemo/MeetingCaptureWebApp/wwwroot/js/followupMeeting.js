// MS Fabric Dialog
var messageDialogHtmlElement = document.getElementById("MessageDialog");
var messageDialog = new fabric["Dialog"](messageDialogHtmlElement);
var lodingDialogHtmlElement = document.getElementById("lodingDialog");
var lodingDialog = new fabric["Dialog"](lodingDialogHtmlElement);
var taskDialogHtmlElement = document.getElementById("TaskDialog");
var taskDialog = new fabric["Dialog"](taskDialogHtmlElement);

// MS Fabric Spinner
var SpinnerElements = document.querySelectorAll(".ms-Spinner");
for (var i = 0; i < SpinnerElements.length; i++) {
    new fabric["Spinner"](SpinnerElements[i]);
}

function showMessageDialog(message) {
    showLoadingDialog(false);
    $("#MessageDialog .ms-Dialog-title").text(message);
    messageDialog.open();
}

function showLoadingDialog(visible, message) {
    if (visible) {
        $("#overlay").show();
        message && $("#lodingDialog .ms-Spinner-label").text(message);
        lodingDialog.open();
    } else {
        $("#overlay").hide();
        lodingDialog.close();
    }
}

function MgtTaskLoaded() {
    var mgtTask = document.querySelector("mgt-tasks");

    if (mgtTask.___hasDoneInitialLoad) {
        var shadowRoot = mgtTask.shadowRoot;

        var items = shadowRoot.querySelectorAll(".TaskContent");
        items.forEach((item, index) => {
            (function(i) {
                item.addEventListener("click", function() {
                    var that = $(this);
                    that.prop('disabled', true);
                    $.when(
                        $.getJSON(
                            `/api/MVCGraph/beta/planner/tasks/${mgtTask._tasks[i].id}`
                        ),
                        $.getJSON(
                            `/api/MVCGraph/beta/planner/tasks/${mgtTask._tasks[i].id}/details`
                        ),
                        $.getJSON(
                            `/api/MVCGraph/beta/planner/buckets/${mgtTask._tasks[i]._raw.bucketId}`
                        ),
                        $.getJSON(
                            `/api/MVCGraph/beta/planner/plans/${mgtTask._tasks[i]._raw.planId}/details`
                        )
                    ).done(function(r1, r2, r3, r4) {
                        let task = r1[0],
                            taskDetail = r2[0],
                            bucket = r3[0],
                            planDetail = r4[0],
                            contentHtml = [];
                        let progress, priority;
                        let category = new Array();

                        //There can be up to 6 categories defined in SDK.
                        if (task.appliedCategories.category1 && planDetail.categoryDescriptions.category1 !== null)
                            category.push(planDetail.categoryDescriptions.category1);
                        if (task.appliedCategories.category2 && planDetail.categoryDescriptions.category2 !== null)
                            category.push(planDetail.categoryDescriptions.category2);
                        if (task.appliedCategories.category3 && planDetail.categoryDescriptions.category3 !== null)
                            category.push(planDetail.categoryDescriptions.category3);
                        if (task.appliedCategories.category4 && planDetail.categoryDescriptions.category4 !== null)
                            category.push(planDetail.categoryDescriptions.category4);
                        if (task.appliedCategories.category5 && planDetail.categoryDescriptions.category5 !== null)
                            category.push(planDetail.categoryDescriptions.category5);
                        if (task.appliedCategories.category6 && planDetail.categoryDescriptions.category6 !== null)
                            category.push(planDetail.categoryDescriptions.category6);

                        if (task.completedBy == null) {
                            if (task.percentComplete == 0) {
                                progress = `<i class="ms-Icon ms-Icon--CircleRing color-notstarted"></i><span>Not started</span>`;
                            } else {
                                progress = `<i class="ms-Icon ms-Icon--CircleHalfFull color-inprogress"></i><span>In progress</span>`;
                            }
                        } else {
                            progress = `<i class="ms-Icon ms-Icon--CompletedSolid color-complete"></i><span>Completed</span>`;
                        }

                        if (task.priority <= 1) {
                            priority = `<i class="ms-Icon ms-Icon--RingerSolid color-urgent"></i> <span>Urgent</span>`;
                        } else if (task.priority <= 4) {
                            priority = `<i class="ms-Icon ms-Icon--Important color-important"></i><span>Important</span>`;
                        } else if (task.priority <= 7) {
                            priority = `<i class="ms-Icon ms-Icon--LocationDot color-medium"></i><span>Medium</span>`;
                        } else {
                            priority = `<i class="ms-Icon ms-Icon--Down color-low"></i><span>Low</span>`;
                        }

                        contentHtml.push(`
                            <div class="title">
                                <h2>${task.title}</h2>
                            </div>
                            <div class="assignedto">
                                <mgt-person user-id="${
                            Object.keys(task.assignments)[0]
                            }" show-name></mgt-person>
                            </div>
                            <div class="body">
                                <div>
                                    <label>Bucket</label>
                                    <div>${bucket.name}</div>
                                </div>
                                <div>
                                    <label>Progress</label>
                                    <div>${progress}</div>
                                </div>
                                <div>
                                    <label>Priority</label>
                                    <div>${priority}</div>
                                </div>
                                <div>
                                    <label>Start date</label>
                                    <div>${
                            task.startDateTime
                                ? moment(task.startDateTime).format(
                                    "MM/DD/YYYY"
                                )
                                : ""
                            }</div>
                                </div>
                                <div>
                                    <label>Due date</label>
                                    <div>${
                            task.dueDateTime
                                ? moment(task.dueDateTime).format(
                                    "MM/DD/YYYY"
                                )
                                : ""
                            }</div>
                                </div>
                                <div>
                                    <label>Category</label>
                                    <div>${category.join(',')}</div>
                                </div>
                            </div>
                            <div class="notes">
                                <label>Notes</label>
                                <textarea readonly>
                                    ${
                            task.referenceCount && task.hasDescription
                                ? taskDetail.description
                                : ""
                            }
                                </textarea>
                            </div>`);

                        contentHtml.push(
                            `<div class="attachments"><label>Attachments</label><div class="rows">`
                        );

                        if (taskDetail.references) {
                            Object.keys(taskDetail.references).forEach(function(item) {
                                contentHtml.push(`
                                    <div class="content">
                                        <a class="preview-list-image" href='${decodeURIComponent(item)}'>
                                            <i class="ms-Icon ms-Icon--Link"></i>
                                        </a>
                                        <a class="item-list-title" href='${decodeURIComponent(item)}'>
                                            <span class="item-list-text" title="Test.docx">${
                                    taskDetail.references[item].alias
                                    }</span>
                                        </a>
                                    </div>`);
                            });
                        }

                        contentHtml.push(`</div></div>
                            <div class="footer">
                                <div class="assignedby">
                                    <mgt-person user-id="${
                            Object.values(task.assignments)[0]
                                .assignedBy.user.id
                            }" show-name></mgt-person>
                                </div>
                                <div class="assigneddate">
                                    ${moment(
                                Object.values(task.assignments)[0]
                                    .assignedBy.assignedDateTime
                            ).format("MMMM DD,YYYY h:mm A")}
                                </div>
                            </div>
                            <div class="bottom">
                                New Task <a href="#">${task.title}</a> created
                            </div>`);

                        $("#TaskDialog .task-detail").html(contentHtml.join(""));
                        taskDialog.open();
                        that.prop('disabled', false);
                    });
                });
            })(index);
        });
    } else {
        setTimeout(MgtTaskLoaded, 200);
    }
}

function saveNotes(success, fail) {
    let formData = new FormData();
    if (CKEDITOR.instances.txtNotes.checkDirty()) {
        let noteContents = CKEDITOR.instances.txtNotes.getData();

        formData.append("TeamId", groupId);
        formData.append("ChannelId", channelId);
        formData.append("NoteContent", noteContents);

        $.ajax({
            url: "/MeetingCapture/UpdateNotes" + location.search,
            data: formData,
            processData: false,
            contentType: false,
            type: "POST",
            success: function () {
                success && success();
            },
            error: function (req, error) {
                fail && fail(error);
            }
        });
    } else {
        success && success();
    }

}

function publishMeeting(success, fail) {
    TeamsHelper.get(function (teamContext) {
        $.ajax({
            url: "/MeetingCapture/Publish" + location.search,
            type: "POST",
            success: function () {
                $("#MessageDialog button").click(function () {
                    location.href = `/MeetingCapture/upcomingMeetings`;
                });
                success && success();
            },
            error: function (req, error) {
                fail && fail(error);
            }
        });
    });
}

$(function() {
    let mgtTask = document.querySelector("mgt-tasks");
    //category1 is Pre-Read task
    mgtTask.taskFilter = task => task.appliedCategories.category1 != true;

    var style = document.createElement("style");
    style.innerHTML =
        ".TaskTitle { font-size: 14px!important; font-weight:normal!important }";
    mgtTask.shadowRoot.appendChild(style);

    if ($("#txtNotes").val().length > 0) {
        var x = $("#txtNotes").val();
        if (x.match(/<body.*?>/g) != null && x.match(/<body.*?>/g).length > 0) {
            $("#txtNotes").val(
                x
                    .split(x.match(/<body.*?>/g)[0])[1]
                    .replace("</body>", "")
                    .replace("</html>", "")
            );
        }
    }
    var editor = CKEDITOR.replace("txtNotes");
    editor.config.extraPlugins = "autogrow";
    editor.config.autoGrow_minHeight = 250;

    $(".date").text(
        `${moment(start).format("dddd MMMM D, YYYY")} | ${moment(start).format(
            "hh:mm a"
        )} - ${moment(end).format("hh:mm a")} (${moment
            .duration(moment(end).diff(moment(start)))
            .asMinutes()} minutes)`
    );
    if ($("#AttachmentsDialog a").length > 0) {
        $("#btnOpenAttachmentsDialog").prop("disabled", false);
    }

    $("#btnSaveNotes").on("click", function () {
        $(this).prop("disabled", true);
        showLoadingDialog(true, "Saving notes.......");

        saveNotes(function () {
            showMessageDialog("The meeting notes have been saved.");
            $("#btnSaveNotes").prop("disabled", false);
        }, function (error) {
            showMessageDialog(error);
            $("#btnSaveNotes").prop("disabled", false);
        });
    });

    $(".ms-Button--publish").on("click", function () {
        $(this).prop("disabled", true);
        showLoadingDialog(true, "Publishing the meeting.......");
        saveNotes(function () {
            publishMeeting(function () {
                $("#MessageDialog button").click(function () {
                    location.href = `/MeetingCapture/upcomingMeetings`;
                });
                showMessageDialog("The meeting has been published.");
                $(".ms-Button--publish").prop("disabled", false);
            }, function (error) {
                showMessageDialog(error);
                $(".ms-Button--publish").prop("disabled", false);
            });
        });
    });

    $(".ms-Button--cancel").on("click", function() {
        TeamsHelper.get(function(teamContext) {
            location.href = `/MeetingCapture/upcomingMeetings`;
        });
    });

    setTimeout(MgtTaskLoaded, 200);
});

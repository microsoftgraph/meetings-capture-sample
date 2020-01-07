(function () {
    _teams_helper = {
        resourceId: document.getElementById("teamTabResource").value,
        groupId: undefined,
        channelId: undefined,
        authToken: undefined,
        userObjectId: undefined,
        getAsync: function () {
            return new Promise((resolve, reject) => {
                TeamsHelper.get(function (teamContext) {
                    resolve({ "Authorization": teamContext.authToken });
                });
            });
        },
        get: function (CB) {

            let that = TeamsHelper;
            var authTokenRequest = {
                successCallback: function (result) {
                    //if (!that.authToken) {
                    //    console.log("Token: " + result);
                    //}
                    that.authToken = result;
                    if (!that.groupId || !that.channelId || !that.tuid) {
                        microsoftTeams.getContext(function (context) {
                            that.groupId = context.groupId;
                            that.channelId = context.channelId;
                            that.userObjectId = context.userObjectId;

                            $.ajaxSetup({
                                beforeSend: function (xhr) {
                                    xhr.setRequestHeader('Authorization', that.authToken);
                                }
                            });
                            CB({ teamId: that.groupId, channelId: that.channelId, authToken: that.authToken, userObjectId: that.userObjectId });
                        });
                    }
                    else {
                        $.ajaxSetup({
                            beforeSend: function (xhr) {
                                xhr.setRequestHeader('Authorization', that.authToken);
                            }
                        });
                        CB({teamId: that.groupId, channelId: that.channelId, authToken: that.authToken });
                    }
                },
                failureCallback: function (error) {
                    console.log("Failure: " + error);
                },
                resources: [that.resourceId]
            };
            microsoftTeams.authentication.getAuthToken(authTokenRequest);
        }
    };
    microsoftTeams.initialize();
    this.TeamsHelper = _teams_helper;
})();
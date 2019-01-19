"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HistoryEventTypes;
(function (HistoryEventTypes) {
    HistoryEventTypes["SIGN_UP"] = "sign_up";
    HistoryEventTypes["LOGIN"] = "login";
    HistoryEventTypes["LOGOUT"] = "logout";
    HistoryEventTypes["LIKE"] = "like";
    HistoryEventTypes["REPOST"] = "repost";
    HistoryEventTypes["COMMENT"] = "comment";
    HistoryEventTypes["NEW_MESSAGE"] = "new_message";
    HistoryEventTypes["WATCH"] = "watch";
    HistoryEventTypes["MATE_ADD"] = "mate_add";
    HistoryEventTypes["MATE_REQUEST"] = "mate_request";
    HistoryEventTypes["SUBSCRIBE"] = "subscribe";
    HistoryEventTypes["TIME_LOCK"] = "time_lock";
    HistoryEventTypes["TIME_UNLOCK"] = "time_unlock";
    HistoryEventTypes["HISTORY_EVENT"] = "history_event";
    HistoryEventTypes["NEW_POST"] = "new_post";
    HistoryEventTypes["UPDATE_USER_DATA"] = "update_user_data";
})(HistoryEventTypes || (HistoryEventTypes = {}));
exports.default = HistoryEventTypes;

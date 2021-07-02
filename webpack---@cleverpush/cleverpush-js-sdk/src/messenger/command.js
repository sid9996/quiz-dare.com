export default class Command {
    static CONNECTED = 'connect';
    static REMOTE_NOTIFICATION_PERMISSION = 'cleverpush.remoteNotificationPermission';
    static REMOTE_OPERATION_COMPLETE = 'cleverpush.operationComplete';
    static REMOTE_RETRIGGER_EVENT = 'cleverpush.remoteRetriggerEvent';
    static MODAL_LOADED = 'cleverpush.modalPrompt.loaded';
    static MODAL_PROMPT_ACCEPTED = 'cleverpush.modalPrompt.accepted';
    static MODAL_PROMPT_REJECTED = 'cleverpush.modalPrompt.canceled';
    static POPUP_LOADED = 'cleverpush.popup.loaded';
    static POPUP_ACCEPTED = 'cleverpush.popup.accepted';
    static POPUP_REJECTED = 'cleverpush.popup.canceled';
    static POPUP_CLOSING = 'cleverpush.popup.closing';
    static REMOTE_NOTIFICATION_PERMISSION_CHANGED = 'cleverpush.remoteNotificationPermissionChanged';
    static IFRAME_POPUP_INITIALIZE = 'cleverpush.iframePopupInitialize';
    static UNSUBSCRIBE_FROM_PUSH = 'cleverpush.unsubscribeFromPush';
    static BEGIN_BROWSING_SESSION = 'cleverpush.beginBrowsingSession';
    static REQUEST_HOST_URL = 'cleverpush.requestHostUrl';
    static SHOW_HTTP_PERMISSION_REQUEST = 'cleverpush.showHttpPermissionRequest';
    static IS_SHOWING_HTTP_PERMISSION_REQUEST = 'cleverpush.isShowingHttpPermissionRequest';
    static WINDOW_TIMEOUT = 'cleverpush.windowTimeout';
    static FINISH_REMOTE_REGISTRATION = 'cleverpush.finishRemoteRegistration';
    static FINISH_REMOTE_REGISTRATION_IN_PROGRESS = 'cleverpush.finishRemoteRegistrationInProgress';
    static POPUP_BEGIN_MESSAGEPORT_COMMS = 'cleverpush.beginMessagePortComms';
    static SERVICEWORKER_COMMAND_REDIRECT = 'cleverpush.command.redirect';
    static HTTP_PERMISSION_REQUEST_RESUBSCRIBE = 'cleverpush.httpPermissionRequestResubscribe';
    static MARK_PROMPT_DISMISSED = 'cleverpush.markPromptDismissed'
}
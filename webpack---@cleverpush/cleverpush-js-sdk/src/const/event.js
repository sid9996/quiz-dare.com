export default class Event {
    static INITIALIZED = 'initialized';
    static INITIALIZATION_FAILED = 'initializationFailed';
    static SUBSCRIBED = 'subscribed';
    static UNSUBSCRIBED = 'unsubscribed';
    static OPTIN_SHOWN = 'optInShown';
    static OPTIN_CLOSED = 'optInClosed';
    static PERMISSION_GRANTED = 'permissionGranted';
    static TOPICS_SET = 'topicsSet';
    static BELL_READY = 'bellReady';
    static PERMISSION_RE_GRANTED = 'permissionReGranted';
    static PANEL_SHOWN = 'panelShown';
    static PANEL_HIDDEN = 'panelHidden';
    static CONFIRM_AVAILABLE = 'confirmAvailable';
}
export default class CleverPushError extends Error {
    constructor(message, reason) {
        super(message);
        this.name = this.constructor.name;
        this.reason = reason;
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        } else {
            this.stack = (new Error(message)).stack;
        }
    }
}
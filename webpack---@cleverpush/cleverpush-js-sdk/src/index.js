import CleverPush from './cleverpush';
import {
    log
} from './utils/debug';

window.__cleverPushSdkLoadCount = (window.__cleverPushSdkLoadCount || 0) + 1;
if (window.__cleverPushSdkLoadCount > 1) {
    log.warn('The SDK is included more than once. Please only load the CleverPush SDK once in your code.');
} else {
    let predefinedFunctionCalls;
    if (typeof window.CleverPush === 'object' && Array.isArray(window.CleverPush)) {
        predefinedFunctionCalls = [...window.CleverPush];
    }

    if (typeof window.CleverPush === 'undefined' || (typeof window.CleverPush === 'object' && Array.isArray(window.CleverPush))) {
        window.CleverPush = new CleverPush();
        // require("expose-loader?CleverPush!./cleverpush.js");
    }

    if (predefinedFunctionCalls) {
        for (let i = 0; i < predefinedFunctionCalls.length; i += 1) {
            window.CleverPush.executeFunction(predefinedFunctionCalls[i]);
        }
    }
}

// prototype 1.7 compatibility fix
// https://github.com/zloirock/core-js/issues/289
if (typeof Symbol !== 'undefined') {
    Object.defineProperty(Array.prototype, Symbol.toStringTag, {
        value: 'Array'
    });
}
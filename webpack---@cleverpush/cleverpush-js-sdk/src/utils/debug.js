import * as loglevel from 'loglevel';
import {
    getEnv
} from './env';

const originalLoggerFactory = loglevel.methodFactory;

export const log = loglevel.getLogger('cleverpush');
const env = getEnv().toUpperCase();
log.methodFactory = function(methodName, logLevel, loggerName) {
    const rawMethod = originalLoggerFactory(methodName, logLevel, loggerName);
    return function() {
        const args = [];
        for (let i = 0; i < arguments.length; i++) {
            let arg = arguments[i];
            if (i === 0 && typeof arguments[i] === 'string') {
                arg = `[CleverPush][${env}] ${arg}`;
            }
            args.push(arg);
        }
        rawMethod.apply(this, args);
    };
};
log.setLevel(log.getLevel(), false); // apply method factory

export function getConsoleStyle(style) {
    if (style === 'code') {
        return `
    padding: 0 1px 1px 5px;
    border: 1px solid #ddd;
    border-radius: 3px;
    font-family: Monaco,"DejaVu Sans Mono","Courier New",monospace;
    color: #444;
    `;
    } else if (style === 'bold') {
        return `
    font-weight: 600;
    color: rgb(51, 51, 51);
    `;
    } else if (style === 'alert') {
        return `
    font-weight: 600;
    color: red;
    `;
    }
    return '';
}

export function stringify(obj) {
    return JSON.stringify(obj, (key, value) => {
        if (typeof value === 'function') {
            return '[Function]';
        }

        return value;
    }, 4);
}

export function logMethodCall(methodName, ...args) {
    return log.debug(`Called %c${methodName}(${args.map(stringify).join(', ')})`, getConsoleStyle('code'), '.');
}
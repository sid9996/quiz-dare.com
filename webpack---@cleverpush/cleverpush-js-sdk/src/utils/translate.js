import UAParser from 'ua-parser-js';
import translations from '../const/translation';
import {
    log
} from './debug';

export function translate(keyParam) {
    const defaultLang = 'en';
    let lang = (window.CleverPush || {
        config: {}
    }).config.language || navigator.language || navigator.userLanguage || defaultLang;
    lang = lang !== 'de-formal' ? lang.substr(0, 2).toLowerCase() : lang;
    if (!translations.hasOwnProperty(lang)) {
        lang = defaultLang;
    }

    let key = keyParam;
    if (key === 'confirm.allowBrowser') {
        key = 'confirm.allow';
        const parser = new UAParser();
        if (parser.getBrowser().name === 'Chrome') {
            key = 'confirm.allowChrome';
        } else if (parser.getBrowser().name === 'Firefox') {
            key = 'confirm.allowFirefox';
        } else if (parser.getBrowser().name === 'Edge') {
            key = 'confirm.allowEdge';
        }
    } else if (key === 'deny.alert') {
        if (location.protocol === 'https:') {
            key = 'deny.alertHttps';
        } else {
            key = 'deny.alertHttp';
        }
    }

    let trans;
    if (translations[lang].hasOwnProperty(key)) {
        trans = translations[lang][key];
    } else if (translations[defaultLang].hasOwnProperty(key)) {
        trans = translations[defaultLang][key];
    }

    if (trans) {
        const charset = (document.characterSet ||  '').toLowerCase();
        if (charset.indexOf('windows-1252') > -1 || charset.indexOf('iso-8859') > -1) {
            try {
                return decodeURIComponent(escape(trans));
            } catch (ignored) {}
        }
        return trans;
    }

    return key;
}

export function charsetEscape(text) {
    let newText = text;
    const charset = (document.characterSet ||  '').toLowerCase();
    if (charset.indexOf('windows-1252') > -1 || charset.indexOf('iso-8859') > -1) {
        try {
            newText = decodeURIComponent(escape(text));
        } catch (e) {
            // log.debug(e);
        }
    }
    return newText;
}

String.prototype.formatCleverPush = function() {
    let formatted = this;
    for (const arg in arguments) {
        if (arguments.hasOwnProperty(arg) && typeof formatted.replace === 'function') {
            formatted = formatted.replace(`{${arg}}`, arguments[arg]);
        }
    }
    return formatted;
};
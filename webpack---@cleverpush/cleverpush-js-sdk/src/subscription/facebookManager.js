import SubscriptionManager from './manager';
import Event from '../const/event';
import SubscribingInProgressError from '../error/SubscribingInProgressError';
import {
    log
} from '../utils/debug';
import CleverPushError from '../error/CleverPushError';

export default class FacebookSubscriptionManager extends SubscriptionManager {
    constructor(config, api, triggerEvent) {
        super(config, api, triggerEvent);

        if (config.multiChannels && config.multiChannels.facebookChannel && config.multiChannels.facebookChannel._id !== config.channelId) {
            config.channelId = config.multiChannels.facebookChannel._id;
            api.channelId = config.channelId;
        }

        // this.storageManager.initDb();

        this.triggerEvent(Event.INITIALIZED);
    }

    isSubscribed() {
        return new Promise((resolve) => {
            this.subscribed = !!this.storageManager.getFacebookUserRef() || !!this.storageManager.isSubscribed(true, true);
            resolve(this.subscribed);
        });
    }

    canSubscribe() {
        return new Promise((resolve, reject) => {
            const params = new URLSearchParams(location.search.slice(1));
            if (params.get('cleverPushFacebookClick') === 'true') {
                reject(new CleverPushError('User is already subscribed', 'subscribed'));
                return;
            }

            if (localStorage.getItem('cleverpush-subscription-status') === 'denied') {
                reject(new CleverPushError('User has manually unsubscribed or denied notifications', 'unsubscribed'));
                return;
            }
            this.isSubscribed().then((isSubscribed) => {
                if (isSubscribed) {
                    reject(new CleverPushError('User is already subscribed', 'subscribed'));
                } else {
                    resolve(true);
                }
            }).catch(reject);
        });
    }

    subscribeForce() {
        return this.subscribe();
    }

    setFacebookUserRef(userRef) {
        this.storageManager.setFacebookUserRef(userRef);

        this.sync({
            facebookUserRef: userRef
        }).then(() => {
            this.isSubscribing = false;
            this.triggerEvent(Event.SUBSCRIBED, this.storageManager.getSubscriptionId());
            if (this.resolveSubscribe) {
                this.resolveSubscribe('granted');
            }
        });
    }

    subscribe() {
        return new Promise((resolve, reject) => {
            if (this.config.facebookAppId && this.config.facebookPageId) {
                window.open(`https://m.me/${this.config.facebookPageId}`, '_blank');

                localStorage.setItem('cleverpush-subscription-status', 'allowed');
                this.triggerEvent(Event.SUBSCRIBED, null);

                // this.isSubscribing = true;
                resolve();
            } else {
                log.warn('Facebook App ID or Page ID missing');
                reject();
            }

            if (this.confirm) {
                this.confirm.hideBackdrop();
            }

            /*
            this.isSubscribed().then((alreadySubscribed) => {
              if (alreadySubscribed) {
                // hide backdrop
                if (this.confirm) {
                  this.confirm.hideBackdrop();
                }

                this.resolveSubscribe = resolve;
              } else if (this.isSubscribing) {
                reject(new SubscribingInProgressError('A subscription process is already in progress.'));
              } else if (this.config.facebookAppId && this.config.facebookPageId) {
                window.open(`https://m.me/${this.config.facebookPageId}`, '_blank');

                localStorage.setItem('cleverpush-subscription-status', 'allowed');
                
                // this.isSubscribing = true;
                resolve();
              } else {
                log.warn('Facebook App ID or Page ID missing');
                reject();
              }
            });
            */
        });
    }

    // can only unsubscribe via API in safari
    unsubscribe(notManually) {
        const subscriptionId = this.storageManager.getSubscriptionId();
        if (subscriptionId) {
            return this.api.unsubscribe(subscriptionId).then(() => {
                this.storageManager.setUnsubscribed(notManually);
                this.triggerEvent(Event.UNSUBSCRIBED);
            });
        }
        return Promise.resolve();
    }

    hasNotificationPermission() {
        return Promise.resolve(!!this.storageManager.getFacebookUserRef());
    }

    getNotificationPermission() {
        return Promise.resolve(this.storageManager.getFacebookUserRef() ? 'granted' : 'default');
    }

    static initFacebook(callback) {
        if (FacebookSubscriptionManager.facebookInitialized) {
            callback();
        } else {
            window.fbAsyncInit = () => {
                log.debug('window.fbAsyncInit');

                FB.init({
                    appId: CleverPush.config.facebookAppId,
                    version: 'v2.9'
                });

                FacebookSubscriptionManager.facebookInitialized = true;

                callback();
            };

            let locale = 'en_US';
            const browserLocale = (navigator.language || navigator.userLanguage || '').replace('-', '_').substr(0, 5);
            const supportedLocales = ['en_US', 'ca_ES', 'cs_CZ', 'cx_PH', 'cy_GB', 'da_DK', 'de_DE', 'eu_ES', 'en_UD', 'es_LA', 'es_ES', 'gn_PY', 'fi_FI', 'fr_FR', 'gl_ES', 'hu_HU', 'it_IT', 'ja_JP', 'ko_KR', 'nb_NO', 'nn_NO', 'nl_NL', 'fy_NL', 'pl_PL', 'pt_BR', 'pt_PT', 'ro_RO', 'ru_RU', 'sk_SK', 'sl_SI', 'sv_SE', 'th_TH', 'tr_TR', 'ku_TR', 'zh_CN', 'zh_HK', 'zh_TW', 'af_ZA', 'sq_AL', 'hy_AM', 'az_AZ', 'be_BY', 'bn_IN', 'bs_BA', 'bg_BG', 'hr_HR', 'nl_BE', 'en_GB', 'et_EE', 'fo_FO', 'fr_CA', 'ka_GE', 'el_GR', 'gu_IN', 'hi_IN', 'is_IS', 'id_ID', 'ga_IE', 'jv_ID', 'kn_IN', 'kk_KZ', 'lv_LV', 'lt_LT', 'mk_MK', 'mg_MG', 'ms_MY', 'mt_MT', 'mr_IN', 'mn_MN', 'ne_NP', 'pa_IN', 'sr_RS', 'so_SO', 'sw_KE', 'tl_PH', 'ta_IN', 'te_IN', 'ml_IN', 'uk_UA', 'uz_UZ', 'vi_VN', 'km_KH', 'tg_TJ', 'ar_AR', 'he_IL', 'ur_PK', 'fa_IR', 'ps_AF', 'my_MM', 'qz_MM', 'or_IN', 'si_LK', 'rw_RW', 'cb_IQ', 'ha_NG', 'ja_KS', 'br_FR', 'tz_MA', 'co_FR', 'as_IN', 'ff_NG', 'sc_IT', 'sz_PL'];
            if (browserLocale && browserLocale !== locale) {
                supportedLocales.forEach((supportedLocale) => {
                    if (supportedLocale === browserLocale || supportedLocale.substr(0, 2) === browserLocale.substr(0, 2)) {
                        locale = supportedLocale;
                    }
                });
            }

            (function(d, s, id) {
                let js,
                    fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) {
                    return;
                }
                js = d.createElement(s);
                js.id = id;
                js.src = '//connect.facebook.net/' + locale + '/sdk.js';
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        }
    }
}
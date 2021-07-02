import {
    domLoaded
} from './dom';
import {
    log
} from './debug';
import {
    device,
    browser
} from './env';

export const detectPrompt = ({
    subscriptionManager,
    config,
    subscribe,
    showBackdrop,
    setShowBackdrop,
    showSilentAlert
}) => {
    if (config.browserType === 'safari') {
        let focusLostFromBlur = false;
        const safariBlurChecker = (i) => {
            if (subscriptionManager.getNotificationPermission() !== 'default') {
                return;
            }

            // max 30 secs
            if (document.hasFocus()) {
                if (i < 300) {
                    setTimeout(() => {
                        safariBlurChecker(i + 1);
                    }, 100);
                } else {
                    log.debug('safariBlurChecker waited 30 secs without success');
                }
            } else if (!focusLostFromBlur) {
                log.debug('safariBlurChecker success');
                showBackdrop();
            }
        };

        log.debug('starting safariBlurChecker');
        safariBlurChecker(0);

        if (subscribe) {
            subscribe();
        }

    } else {
        const showBackdropSubscribe = () => {
            domLoaded().then(() => {
                let subscribeInProgress = true;
                if (config.env === 'PREVIEW') {
                    showBackdrop();

                } else {
                    let blurCheckerFired = false;
                    // we'll check for the blur event as this is triggered when the native prompt has been shown
                    const checkForBlur = () => {
                        if (blurCheckerFired) {
                            return;
                        }
                        log.debug('Blur checker fired');
                        clearTimeout(cancelBlurTimeout);
                        window.removeEventListener('blur', checkForBlur);
                        blurCheckerFired = true;

                        if (subscribeInProgress) {
                            showBackdrop();
                        }
                    };
                    window.addEventListener('blur', checkForBlur);

                    // cancel blur event after 2 secs
                    const cancelBlurTimeout = setTimeout(() => {
                        log.debug('Blur checker cancelled');
                        window.removeEventListener('blur', checkForBlur);

                        if (showSilentAlert && device.type !== 'mobile' && !['Firefox', 'Mozilla'].includes(browser.name) && (browser.name !== 'Edge' || config.showSilentPromptTutorial)) {
                            showSilentAlert();
                        }
                    }, 2 * 1000);
                }

                if (subscribe) {
                    subscribe(() => {
                        subscribeInProgress = false;
                    });
                }
            });
        };

        if (config.browserType === 'w3c' && 'storage' in navigator && 'estimate' in navigator.storage) {
            // Chrome 76 incognito detection (not 100% therefore only hide backdrop)
            navigator.storage.estimate().then(({
                quota
            }) => {
                if (quota <= (120 * (2 ** 20))) {
                    if (setShowBackdrop) {
                        setShowBackdrop(false);
                    }

                    log.debug('We are *probably* in incognito (used chrome 76 detection method). Will not show backdrop + layer.');

                    if (subscribe) {
                        domLoaded().then(() => {
                            subscribe();
                        });
                    }

                } else {
                    showBackdropSubscribe();
                }
            });
        } else {
            showBackdropSubscribe();
        }
    }
};
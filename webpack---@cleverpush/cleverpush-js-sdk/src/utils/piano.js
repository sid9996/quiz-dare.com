const pianoChangeListeners = [];
let pianoEnabled = true;

// Check in UserCentrics + TCF2 if Piano is enabled or disabled
if (typeof __tcfapi === 'function' && typeof UC_UI === 'object') {
    const getPianoService = () => {
        return UC_UI.getServices().find(s => s.name && ((s.name ||  '').toLowerCase().indexOf('cxense') > -1) || (s.name ||  '').toLowerCase().indexOf('piano dmp') > -1);
    };

    pianoEnabled = false;
    let pianoService = getPianoService();
    if (pianoService) {
        pianoEnabled = pianoService.consent.status;
    }

    __tcfapi('addEventListener', 2, (success) => {
        if (success) {
            pianoService = getPianoService();
            if (pianoService) {
                const pianoEnabledNew = pianoService.consent.status;
                if (pianoEnabledNew !== pianoEnabled) {
                    pianoEnabled = pianoEnabledNew;
                    pianoChangeListeners.forEach((listener) => typeof listener === 'function' && listener(pianoEnabled));
                }
            }
        }
    });
}

export const getPianoEnabled = () => pianoEnabled;

export const onPianoEnabledChange = (listener) => pianoChangeListeners.push(listener);
import {
    log,
    logMethodCall
} from './debug';

export function appendGcmManifest(gcmManifestPath) {
    logMethodCall('appendGcmManifest');

    const path = typeof gcmManifestPath !== 'undefined' ? gcmManifestPath : '/cleverpush-manifest.json';

    if (path === 'DISABLED') {
        return;
    }

    const manifest = document.createElement('link');
    manifest.rel = 'manifest';
    manifest.href = path;
    document.getElementsByTagName('head')[0].appendChild(manifest);

    const manifests = document.querySelectorAll('link[rel=manifest]');
    if (manifests && manifests.length > 1) {
        for (let i = 0; i < manifests.length; i += 1) {
            const foundManifest = manifests[i];
            if (foundManifest.href.indexOf(path) > -1) {
                document.querySelector('head').insertBefore(foundManifest, document.querySelector('head').children[0]);
                log.debug('Moved GCM manifest before other manifests.');
            }
        }
    }
}

export function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    const rawData = atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}
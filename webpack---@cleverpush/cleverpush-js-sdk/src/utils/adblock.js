export default function adsBlocked(callback) {
    let adBlockEnabled = false;
    let testAd = document.createElement('div');
    testAd.innerHTML = '&nbsp;';
    testAd.className = 'adsbox';
    document.body.appendChild(testAd);
    window.setTimeout(() => {
        if (testAd.offsetHeight === 0) {
            adBlockEnabled = true;
        }
        testAd.remove();
        callback(adBlockEnabled);
    }, 100);
}
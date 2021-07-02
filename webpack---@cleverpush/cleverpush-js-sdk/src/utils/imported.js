export function isSubscribedAccengage(config) {
    return new Promise((resolve) => {

        const messageListener = (e) => {
            console.log('acc message', e.data);
            if (e.data && e.data.type === 'mid:get:storage') {
                window.removeEventListener('message', messageListener);
                if (e.data.body) {
                    const body = JSON.parse(e.data.body);
                    if (body) {
                        resolve(body.isOptin === true);
                    } else {
                        resolve(false);
                    }
                } else {
                    resolve(false);
                }
            }
        };

        window.addEventListener('message', messageListener);

        let iframe = document.querySelector('iframe[name="acc_proxy"]');
        if (!iframe) {
            iframe = document.createElement('iframe');
            iframe.src = 'https://' + config.importedSubscriptionsSubdomain + '.accengage.net/pushweb/assets/m_main.html';
            iframe.style.display = 'none';
            iframe.style.border = 'none';
            iframe.name = 'acc_proxy';
            iframe.onload = () => {
                iframe.contentWindow.postMessage({
                    topic: 'mid:get:storage',
                    type: 'mid:get:storage',
                    body: {}
                }, '*');
            };
            iframe.onerror = () => resolve(false);
            document.body.appendChild(iframe);
        } else {
            iframe.contentWindow.postMessage({
                topic: 'mid:get:storage',
                type: 'mid:get:storage',
                body: {}
            }, '*');
        }
    });
}
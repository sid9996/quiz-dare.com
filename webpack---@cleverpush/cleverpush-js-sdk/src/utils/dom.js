export function domLoaded() {
    return new Promise((resolve) => {
        if (document.readyState === 'complete') {
            resolve();
        } else {
            const onReady = () => {
                resolve();
                document.removeEventListener('DOMContentLoaded', onReady, true);
                window.removeEventListener('load', onReady, true);
            };
            document.addEventListener('DOMContentLoaded', onReady, true);
            window.addEventListener('load', onReady, true);
        }
    });
}

export function domReady() {
    return new Promise((resolve) => {
        if (document.readyState !== 'loading') {
            resolve();
        } else if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', resolve);
        } else {
            document.attachEvent('onreadystatechange', () => {
                if (document.readyState !== 'loading') {
                    resolve();
                }
            });
        }
    });
}

export function createNode(htmlStr) {
    const frag = document.createDocumentFragment();
    const temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}

export function fadeIn(el, duration, callback) {
    el.style.opacity = 0;

    let last = +new Date();
    const tick = function() {
        let newOpacity = +el.style.opacity + ((new Date() - last) / duration);
        if (newOpacity > 1) {
            newOpacity = 1;
        }
        el.style.opacity = newOpacity;
        last = +new Date();

        if (+el.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        } else if (typeof callback === 'function') {
            callback();
        }
    };

    tick();
}

export function fadeOut(el, duration, callback) {
    el.style.opacity = 1;

    let last = +new Date();
    const tick = function() {
        let newOpacity = +el.style.opacity - ((new Date() - last) / duration);
        if (newOpacity < 0) {
            newOpacity = 0;
        }
        el.style.opacity = newOpacity;
        last = +new Date();

        if (+el.style.opacity > 0) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        } else if (typeof callback === 'function') {
            callback();
        }
    };

    tick();
}

export function isInViewport(elParam) {
    var top = elParam.offsetTop;
    var left = elParam.offsetLeft;
    var width = elParam.offsetWidth;
    var height = elParam.offsetHeight;

    let el = elParam;
    while (el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }

    return (
        top < (window.pageYOffset + window.innerHeight) &&
        left < (window.pageXOffset + window.innerWidth) &&
        (top + height) > window.pageYOffset &&
        (left + width) > window.pageXOffset
    );
}

export function getPercentOfView(element) {
    const viewTop = window.pageYOffset;
    const viewBottom = viewTop + window.innerHeight;
    const rect = element.getBoundingClientRect();
    const elementTop = rect.top + viewTop;
    const elementBottom = elementTop + rect.height;

    const result = (window.pageYOffset - elementTop) / (elementBottom - window.innerHeight - elementTop) * 100;
    if (result < 0) {
        return 0;
    }
    if (result > 100) {
        return 100;
    }
    return result;
}
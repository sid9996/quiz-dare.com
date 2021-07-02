import CleverPushError from '../error/CleverPushError';

function fetchWithTimeout(url, options, timeout = 10000) {
    return Promise.race([
        fetch(url, options),
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error('request timeout')), timeout)
        )
    ]);
}

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON, status from the response
 */
function parseJSON(response) {
    return new Promise((resolve) => response.json()
        .then((json) => resolve({
            status: response.status,
            ok: response.ok,
            json
        })).catch(() => resolve({
            status: response.status,
            ok: response.ok,
            json: null
        })));
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {Promise}           The request promise
 */
export default function request(url, options) {
    return new Promise((resolve, reject) => {
        fetchWithTimeout(url, options, options.timeout || 10000)
            .then(parseJSON)
            .then((response) => {
                if (response.ok) {
                    return resolve(response.json);
                }
                // extract the error from the server's json
                return reject(new CleverPushError(response.json ? response.json.error : 'HTTP Error', response.status));
            })
            .catch((error) => reject(error));
    });
}
/**
 * Created by miroslav.georgiev on 12/10/16.
 */

(function () {
    'use strict';

    const phones = [{
        'id': 'nokian9',
        'brand': 'Nokia',
        'model': 'N9',
        'color': 'White',
        'memory': '64GB',
        'features': {
            'bluetooth': true,
            'wifi': true,
            'gps': true
        }
    }];

    function getPhone(phoneId) {
        if (phoneId && typeof phoneId === 'string') {
            for (const phone of phones) {
                if (phone.id === phoneId) {
                    return Promise.resolve(phone);
                }
            }

            const reason = new Error(`we do not have '${phoneId}' phone.`);

            return Promise.reject(reason);
        }

        const reason = new Error(`id '${phoneId}' either not a string or not provided.`);

        return Promise.reject(reason);
    }

    function fetchPhone(phoneId) {
        getPhone(phoneId)
            .then(handleSuccess)
            .catch(handleError);
    }

    function handleSuccess(phone) {
        console.log(phone);
    }

    function handleError(error) {
        console.error(error);
    }

    // fetchPhone(123);
    // fetchPhone('miro');
    fetchPhone('nokian9');
})();
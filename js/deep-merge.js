(function () {
    /**
     * @description Method to check if an item is an object. Date and Function are considered
     * an object, so if you need to exclude those, please update the method accordingly.
     * @param item - The item that needs to be checked
     * @return {Boolean} Whether or not @item is an object
     */
    function isObject(item) {
        return (item === Object(item) && !Array.isArray(item));
    }

    /**
     * @description Method to deeply merge objects, if the same key holds arrays, then these arrays are concatenated and primitive duplicate values removed
     * @param {Object} target - The targeted object that needs to be merged with the supplied @sources
     * @param {Object} [sources] - The object(s) that need to be merged with the @target
     * @return {Object} The merged object
     */
    function deepMerge(target, ...sources) {
        if (!sources.length) {
            return target;
        }

        let result = target;

        if (isObject(result)) {
            for (let i = 0, len = sources.length; i < len; i++) {
                const elm = sources[i];

                if (isObject(elm)) {
                    for (const key in elm) {
                        if (elm.hasOwnProperty(key)) {
                            if (isObject(elm[key])) {
                                if (!result[key] || !isObject(result[key])) {
                                    result[key] = {};
                                }
                                deepMerge(result[key], elm[key]);
                            } else {
                                if (Array.isArray(result[key]) && Array.isArray(elm[key])) {
                                    result[key] = Array.from(new Set(result[key].concat(elm[key])));
                                } else {
                                    result[key] = elm[key];
                                }
                            }
                        }
                    }
                }
            }
        }

        return result;
    }

    const obj1 = {
        date: new Date(),
        id: 123,
        address: {
            country: 'USA',
            state: 'NJ'
        },
        name: {
            firstName: 'fname',
            lastName: 'fname'
        },
        phone: '123-456-7890',
        nickname: {
            name: 'mike'
        },
        drivingLicense: [ '123', '456', { id: 456 } ],
        hello(str) {
            const greeting = `Hello ${str}`;

            console.log(`object method: 'Hello ${str}'`);

            return greeting;
        }
    };

    const obj2 = {
        address: {
            street: '123 Main Str',
            city: 'New York',
            state: 'NY',
            zip: '11111'
        },
        name: {
            lastName: 'last name'
        },
        phone: {
            cell: '111-111-1111',
            home: '222-222-2222'
        },
        nickname: 'mike',
        drivingLicense: [ '1111-2222', '123', { id: 456 } ]
    };

    const obj3 = {
        phone: {
            work: '333-333-3333'
        },
        name: 'miro'
    };

    const obj4 = {
        phone: {
            work: {
                number: '123',
                canText: true
            }
        }
    };

    const obj5 = {
        phone: {
            work: {
                number: '456',
                canText: false
            }
        }
    };

    const finalObj = deepMerge(obj1, obj2, obj3, obj4, obj5);
    console.log('new finalObj:', finalObj);
    console.log('new finalObj method:', finalObj.hello('mike'));
})();

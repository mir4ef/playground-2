/**
 * Created by miroslav.georgiev on 7/3/17.
 */

(function () {
    'use strict';

    /**
     * @method flattenArray
     * @description A method to convert multi dimensional arrays to 1D arrays
     * @param {Array} arr - The multi D array that needs to be flattened (converted to 1D)
     * @param {String} [key] - An object key that will be used to flatten an array of
     * nested objects (e.g. "[ { key: [ val1, val2, ..., valN ] }, { key: [ val1, val2, ..., valN ] } ]")
     * @param {Boolean} [remove] - Flag to indicate whether or not to delete object's children if
     * they are not need it after flattening (e.g. if true, will remove "key: [ val1, val2, ..., valN ]" after it is being flattened)
     * @return {Array} Flattened array
     */
    function flattenArray(arr, key, remove) {
        if (!Array.isArray(arr)) {
            console.warn(`${new Date()}: the passed argument is not an array:`, arr);

            return arr;
        }

        const result = arr.reduce((prev, curr) => {
            const isObject = !!curr[key];
            const nestedItem = isObject ? curr[key] : curr;
            const isArray = Array.isArray(nestedItem);
            let finalArr = (isObject || !isArray) ? prev.concat(curr) : [];

            if (isArray) {
                if (isObject) {
                    finalArr = finalArr.concat(flattenArray(nestedItem, key, remove));

                    if (remove) {
                        delete curr[key];
                    }
                } else {
                    // pass the key in case a deeper nested object needs to be flattened (e.g. nestedWithObj below)
                    finalArr = prev.concat(flattenArray(nestedItem, key, remove));
                }
            }

            return finalArr;
        }, []);

        return result;
    }

    // some tests
    const myArray = [[ 1, 2 ], [ 3, 4, 5 ], [ 'name 1', 'name 2', 'name 3' ], [ 6, 7, 8, 9 ]];
    console.log('new myArray:', flattenArray(myArray));

    const nested = [ 3, [ 1, 'hey', [ 2, 'you', [ 2, 5 ]]], 1, [ 9, [ { name: 'hello' }, [ 2, true ]]]];
    console.log('new nested:', flattenArray(nested));

    const notArray = { key: 123 };
    console.log('new notArray:', flattenArray(notArray));

    const nestedWithObj = [ 3, [ 1, 'hey', [ 2, 'you', [ 2, 5 ]]], 1, [ 9, [ { name: 'my name' }, [ 2, true ], [ { name: 'your name', children: [ 'child here' ] } ]]]];
    console.log('new nestedWithObj:', flattenArray(nestedWithObj, 'children'));

    const data = [
        { code: '111', description: 'some desc 1' },
        { code: '222', description: 'some desc 2' },
        { code: '333', description: 'some desc 3' },
        {
            code: '444',
            description: 'some desc 4',
            children: [
                { code: '444.1', description: 'nested some desc 1' },
                { code: '444.2', description: 'nested some desc 2' }
            ]
        },
        { code: '555', description: 'some desc 5' },
        {
            code: '666',
            description: 'some desc 6',
            children: [
                { code: '666.1', description: 'nested some desc 6.1' },
                {
                    code: '666.2',
                    description: 'nested some desc 6.2',
                    children: [
                        { code: '666.2.1', description: 'nested some desc 6.2.1' },
                        { code: '666.2.2', description: 'nested some desc 6.2.2' }
                    ]
                },
                { code: '666.3', description: 'nested some desc 6.3' }
            ]
        },
        { code: '777', description: 'some desc 7' }
    ];

    const newArr = flattenArray(data, 'children', true);
    console.log('new data arr:', newArr);
})();

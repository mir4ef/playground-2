/**
 * Created by miroslav.georgiev on 11/6/16.
 */

(function () {
    'use strict';

    onmessage = function (msg) {
        const filtered = filterUnique(msg.data);

        postMessage(filtered);
    };

    /**
     * @summary Clean an array from duplicates and empty values
     * @description Method that accepts an array as an argument and filters out duplicates and false/null/undefined values and returns an array only with unique values
     * @param {Array} array - The array to be filtered of duplicates and empty values
     * @return {*} Returns either a filtered array or the original data if the passed argument is not an array
     */
    function filterUnique(array) {
        if (array.constructor !== Array) {
            console.warn(`${new Date()}: the passed argument is not an array, so nothing to do:`, array);

            return array;
        }

        const unique = [];

        for (const val of array) {
            if (!!val && unique.indexOf(val) < 0) {
                unique.push(val);
            }
        }

        return unique;
    }
})();
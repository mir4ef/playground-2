/**
 * Created by miroslav.georgiev on 11/5/16.
 */

(function () {
    'use strict';

    // const arr = ['asd', ,, '', 'asdf', '123', 0,, '0', '123asd', 'asd123', 'asd', '123asd', undefined, undefined, null, null, false, false, 'false', 'null', 'false', 'null', 'undefined', 123];
    // const arr = ['asd', 'asdf', '123', '123asd', 'asd123', 'asd', '123asd', undefined, undefined, null, null, false, false, 'false', 'null', 'false', 'null', 'undefined', 123, 1234, 123, 123, 12345, 123, 'asd', 'asd123', 'some', 'miro', 'daddy', 'ryan', 'rali', 'mammy'];
    // const arr = ['asd', 'asdf', '123', '123asd', 'asd123', 'asd', '123asd', undefined, undefined, null, null, false, false, 'false', 'null', 'false', 'null', 'undefined', 123, 1234, 123, 123, 12345, 123, 'asd', 'asd123', 'some', 'miro', 'daddy', 'ryan', 'rali', 'mammy', 'asd', 'asdf', '123', '123asd', 'asd123', 'asd', '123asd', undefined, undefined, null, null, false, false, 'false', 'null', 'false', 'null', 'undefined', 123, 1234, 123, 123, 12345, 123, 'asd', 'asd123', 'some', 'miro', 'daddy', 'ryan', 'rali', 'mammy', 'asd', 'asdf', '123', '123asd', 'asd123', 'asd', '123asd', undefined, undefined, null, null, false, false, 'false', 'null', 'false', 'null', 'undefined', 123, 1234, 123, 123, 12345, 123, 'asd', 'asd123', 'some', 'miro', 'daddy', 'ryan', 'rali', 'mammy', 'asd', 'asdf', '123', '123asd', 'asd123', 'asd', '123asd', undefined, undefined, null, null, false, false, 'false', 'null', 'false', 'null', 'undefined', 123, 1234, 123, 123, 12345, 123, 'asd', 'asd123', 'some', 'miro', 'daddy', 'ryan', 'rali', 'mammy', 'asd', 'asdf', '123', '123asd', 'asd123', 'asd', '123asd', undefined, undefined, null, null, false, false, 'false', 'null', 'false', 'null', 'undefined', 123, 1234, 123, 123, 12345, 123, 'asd', 'asd123', 'some', 'miro', 'daddy', 'ryan', 'rali', 'mammy'];
    const arr = ['asd', 'asdf', '123', '123asd', 'asd123', 'asd', '123asd', undefined, undefined, null, null, false, false, 'false', 'null', 'false', 'null', 'undefined', 123, 1234, 123, 123, 12345, 123, 'asd', 'asd123', 'some', 'miro', 'daddy', 'ryan', 'rali', 'mammy', 'asd', 'asdf', '123', '123asd', 'asd123', 'asd', '123asd', undefined, undefined, null, null, false, false, 'false', 'null', 'false', 'null', 'undefined', 123, 1234, 123, 123, 12345, 123, 'asd', 'asd123', 'some', 'miro', 'daddy', 'ryan', 'rali', 'mammy', 'asd', 'asdf', '123', '123asd', 'asd123', 'asd', '123asd', undefined, undefined, null, null, false, false, 'false', 'null', 'false', 'null', 'undefined', 123, 1234, 123, 123, 12345, 123, 'asd', 'asd123', 'some', 'miro', 'daddy', 'ryan', 'rali', 'mammy', 'asd', 'asdf', '123', '123asd', 'asd123', 'asd', '123asd', undefined, undefined, null, null, false, false, 'false', 'null', 'false', 'null', 'undefined', 123, 1234, 123, 123, 12345, 123, 'asd', 'asd123', 'some', 'miro', 'daddy', 'ryan', 'rali', 'mammy', 'asd', 'asdf', '123', '123asd', 'asd123', 'asd', '123asd', undefined, undefined, null, null, false, false, 'false', 'null', 'false', 'null', 'undefined', 123, 1234, 123, 123, 12345, 123, 'asd', 'asd123', 'some', 'miro', 'daddy', 'ryan', 'rali', 'mammy', 'asd', 'asdf', '123', '123asd', 'asd123', 'asd', '123asd', undefined, undefined, null, null, false, false, 'false', 'null', 'false', 'null', 'undefined', 123, 1234, 123, 123, 12345, 123, 'asd', 'asd123', 'some', 'miro', 'daddy', 'ryan', 'rali', 'mammy', 'asd', 'asdf', '123', '123asd', 'asd123', 'asd', '123asd', undefined, undefined, null, null, false, false, 'false', 'null', 'false', 'null', 'undefined', 123, 1234, 123, 123, 12345, 123, 'asd', 'asd123', 'some', 'miro', 'daddy', 'ryan', 'rali', 'mammy', 'asd', 'asdf', '123', '123asd', 'asd123', 'asd', '123asd', undefined, undefined, null, null, false, false, 'false', 'null', 'false', 'null', 'undefined', 123, 1234, 123, 123, 12345, 123, 'asd', 'asd123', 'some', 'miro', 'daddy', 'ryan', 'rali', 'mammy', 'asd', 'asdf', '123', '123asd', 'asd123', 'asd', '123asd', undefined, undefined, null, null, false, false, 'false', 'null', 'false', 'null', 'undefined', 123, 1234, 123, 123, 12345, 123, 'asd', 'asd123', 'some', 'miro', 'daddy', 'ryan', 'rali', 'mammy', 'asd', 'asdf', '123', '123asd', 'asd123', 'asd', '123asd', undefined, undefined, null, null, false, false, 'false', 'null', 'false', 'null', 'undefined', 123, 1234, 123, 123, 12345, 123, 'asd', 'asd123', 'some', 'miro', 'daddy', 'ryan', 'rali', 'mammy', 'asd', 'asdf', '123', '123asd', 'asd123', 'asd', '123asd', undefined, undefined, null, null, false, false, 'false', 'null', 'false', 'null', 'undefined', 123, 1234, 123, 123, 12345, 123, 'asd', 'asd123', 'some', 'miro', 'daddy', 'ryan', 'rali', 'mammy', 'asd', 'asdf', '123', '123asd', 'asd123', 'asd', '123asd', undefined, undefined, null, null, false, false, 'false', 'null', 'false', 'null', 'undefined', 123, 1234, 123, 123, 12345, 123, 'asd', 'asd123', 'some', 'miro', 'daddy', 'ryan', 'rali', 'mammy', 'asd', 'asdf', '123', '123asd', 'asd123', 'asd', '123asd', undefined, undefined, null, null, false, false, 'false', 'null', 'false', 'null', 'undefined', 123, 1234, 123, 123, 12345, 123, 'asd', 'asd123', 'some', 'miro', 'daddy', 'ryan', 'rali', 'mammy', 'asd', 'asdf', '123', '123asd', 'asd123', 'asd', '123asd', undefined, undefined, null, null, false, false, 'false', 'null', 'false', 'null', 'undefined', 123, 1234, 123, 123, 12345, 123, 'asd', 'asd123', 'some', 'miro', 'daddy', 'ryan', 'rali', 'mammy', 'asd', 'asdf', '123', '123asd', 'asd123', 'asd', '123asd', undefined, undefined, null, null, false, false, 'false', 'null', 'false', 'null', 'undefined', 123, 1234, 123, 123, 12345, 123, 'asd', 'asd123', 'some', 'miro', 'daddy', 'ryan', 'rali', 'mammy', 'asd', 'asdf', '123', '123asd', 'asd123', 'asd', '123asd', undefined, undefined, null, null, false, false, 'false', 'null', 'false', 'null', 'undefined', 123, 1234, 123, 123, 12345, 123, 'asd', 'asd123', 'some', 'miro', 'daddy', 'ryan', 'rali', 'mammy', 'asd', 'asdf', '123', '123asd', 'asd123', 'asd', '123asd', undefined, undefined, null, null, false, false, 'false', 'null', 'false', 'null', 'undefined', 123, 1234, 123, 123, 12345, 123, 'asd', 'asd123', 'some', 'miro', 'daddy', 'ryan', 'rali', 'mammy', 'asd', 'asdf', '123', '123asd', 'asd123', 'asd', '123asd', undefined, undefined, null, null, false, false, 'false', 'null', 'false', 'null', 'undefined', 123, 1234, 123, 123, 12345, 123, 'asd', 'asd123', 'some', 'miro', 'daddy', 'ryan', 'rali', 'mammy', 'asd', 'asdf', '123', '123asd', 'asd123', 'asd', '123asd', undefined, undefined, null, null, false, false, 'false', 'null', 'false', 'null', 'undefined', 123, 1234, 123, 123, 12345, 123, 'asd', 'asd123', 'some', 'miro', 'daddy', 'ryan', 'rali', 'mammy', 'asd', 'asdf', '123', '123asd', 'asd123', 'asd', '123asd', undefined, undefined, null, null, false, false, 'false', 'null', 'false', 'null', 'undefined', 123, 1234, 123, 123, 12345, 123, 'asd', 'asd123', 'some', 'miro', 'daddy', 'ryan', 'rali', 'mammy', 'asd', 'asdf', '123', '123asd', 'asd123', 'asd', '123asd', undefined, undefined, null, null, false, false, 'false', 'null', 'false', 'null', 'undefined', 123, 1234, 123, 123, 12345, 123, 'asd', 'asd123', 'some', 'miro', 'daddy', 'ryan', 'rali', 'mammy', 'asd', 'asdf', '123', '123asd', 'asd123', 'asd', '123asd', undefined, undefined, null, null, false, false, 'false', 'null', 'false', 'null', 'undefined', 123, 1234, 123, 123, 12345, 123, 'asd', 'asd123', 'some', 'miro', 'daddy', 'ryan', 'rali', 'mammy', 'asd', 'asdf', '123', '123asd', 'asd123', 'asd', '123asd', undefined, undefined, null, null, false, false, 'false', 'null', 'false', 'null', 'undefined', 123, 1234, 123, 123, 12345, 123, 'asd', 'asd123', 'some', 'miro', 'daddy', 'ryan', 'rali', 'mammy', 'asd', 'asdf', '123', '123asd', 'asd123', 'asd', '123asd', undefined, undefined, null, null, false, false, 'false', 'null', 'false', 'null', 'undefined', 123, 1234, 123, 123, 12345, 123, 'asd', 'asd123', 'some', 'miro', 'daddy', 'ryan', 'rali', 'mammy', 'asd', 'asdf', '123', '123asd', 'asd123', 'asd', '123asd', undefined, undefined, null, null, false, false, 'false', 'null', 'false', 'null', 'undefined', 123, 1234, 123, 123, 12345, 123, 'asd', 'asd123', 'some', 'miro', 'daddy', 'ryan', 'rali', 'mammy', 'asd', 'asdf', '123', '123asd', 'asd123', 'asd', '123asd', undefined, undefined, null, null, false, false, 'false', 'null', 'false', 'null', 'undefined', 123, 1234, 123, 123, 12345, 123, 'asd', 'asd123', 'some', 'miro', 'daddy', 'ryan', 'rali', 'mammy', 'asd', 'asdf', '123', '123asd', 'asd123', 'asd', '123asd', undefined, undefined, null, null, false, false, 'false', 'null', 'false', 'null', 'undefined', 123, 1234, 123, 123, 12345, 123, 'asd', 'asd123', 'some', 'miro', 'daddy', 'ryan', 'rali', 'mammy', 'asd', 'asdf', '123', '123asd', 'asd123', 'asd', '123asd', undefined, undefined, null, null, false, false, 'false', 'null', 'false', 'null', 'undefined', 123, 1234, 123, 123, 12345, 123, 'asd', 'asd123', 'some', 'miro', 'daddy', 'ryan', 'rali', 'mammy', 'asd', 'asdf', '123', '123asd', 'asd123', 'asd', '123asd', undefined, undefined, null, null, false, false, 'false', 'null', 'false', 'null', 'undefined', 123, 1234, 123, 123, 12345, 123, 'asd', 'asd123', 'some', 'miro', 'daddy', 'ryan', 'rali', 'mammy', 'asd', 'asdf', '123', '123asd', 'asd123', 'asd', '123asd', undefined, undefined, null, null, false, false, 'false', 'null', 'false', 'null', 'undefined', 123, 1234, 123, 123, 12345, 123, 'asd', 'asd123', 'some', 'miro', 'daddy', 'ryan', 'rali', 'mammy', 'asd', 'asdf', '123', '123asd', 'asd123', 'asd', '123asd', undefined, undefined, null, null, false, false, 'false', 'null', 'false', 'null', 'undefined', 123, 1234, 123, 123, 12345, 123, 'asd', 'asd123', 'some', 'miro', 'daddy', 'ryan', 'rali', 'mammy', 'asd', 'asdf', '123', '123asd', 'asd123', 'asd', '123asd', undefined, undefined, null, null, false, false, 'false', 'null', 'false', 'null', 'undefined', 123, 1234, 123, 123, 12345, 123, 'asd', 'asd123', 'some', 'miro', 'daddy', 'ryan', 'rali', 'mammy', 'asd', 'asdf', '123', '123asd', 'asd123', 'asd', '123asd', undefined, undefined, null, null, false, false, 'false', 'null', 'false', 'null', 'undefined', 123, 1234, 123, 123, 12345, 123, 'asd', 'asd123', 'some', 'miro', 'daddy', 'ryan', 'rali', 'mammy', 'asd', 'asdf', '123', '123asd', 'asd123', 'asd', '123asd', undefined, undefined, null, null, false, false, 'false', 'null', 'false', 'null', 'undefined', 123, 1234, 123, 123, 12345, 123, 'asd', 'asd123', 'some', 'miro', 'daddy', 'ryan', 'rali', 'mammy', 'asd', 'asdf', '123', '123asd', 'asd123', 'asd', '123asd', undefined, undefined, null, null, false, false, 'false', 'null', 'false', 'null', 'undefined', 123, 1234, 123, 123, 12345, 123, 'asd', 'asd123', 'some', 'miro', 'daddy', 'ryan', 'rali', 'mammy'];
    let filterred = [];

//            console.log(arr);
    console.log(arr.length);

    /**********************************************/
//            console.time('!!val');
//            filterred = arr.filter(val => {
//                return !!val;
//            });
//            console.timeEnd('!!val');
//
//            console.log(filterred);
    /**********************************************/
    /**********************************************/
//            filterred = arr;
//
//            console.time('indexOf === index');
//            filterred = arr.filter((val, index, array) => {
//                return array.indexOf(val) === index;
//            });
//            console.timeEnd('indexOf === index');
//            console.log(filterred);
    /**********************************************/
    /**********************************************/
    filterred = arr;

    console.time('!!val && indexOf === index');
    if (arr.constructor === Array) {
        filterred = arr.filter((val, index, array) => {
            return !!val && array.indexOf(val) === index;
        });
    }
    console.timeEnd('!!val && indexOf === index');
    // console.log(filterred);
    /**********************************************/
    /**********************************************/
//            filterred = arr;
//
//            console.time('Array from new Set');
//            filterred = Array.from(new Set(arr));
//            console.timeEnd('Array from new Set');
//            console.log(filterred);
    /**********************************************/
    /**********************************************/
    filterred = arr;

    console.time('Loop');
    filterred = filterUnique(arr);
    console.timeEnd('Loop');
    // console.log(filterred);
    /**********************************************/
    /**********************************************/
//            filterred = arr;
//
//            console.time('!!val + Array from new Set');
//            filterred = arr.filter(val => {
//                return !!val;
//            });
//            filterred = Array.from(new Set(filterred));
//            console.timeEnd('!!val + Array from new Set');
//            console.log(filterred);
    /**********************************************/
    /**********************************************/
    filterred = arr;

    console.time('Loop ES6');
    filterred = filterUniqueES6(arr);
    console.timeEnd('Loop ES6');
    // console.log(filterred);
    /**********************************************/
    /**********************************************/
    filterred = arr;

    console.time('Loop Obj');
    filterred = filterUniqueWithObj(arr);
    console.timeEnd('Loop Obj');
    // console.log(filterred);
    /**********************************************/

    function filterUnique(array) {
        if (array.constructor !== Array) {
            console.error(`${new Date()}: the passed argument is not an array:`, array);

            return array;
        }

        const unique = [];

        for (let i = 0, len = array.length; i < len; i++) {
            const val = array[i];

            if (!!val && unique.indexOf(val) < 0) {
                unique.push(val);
            }
        }

        return unique;
    }

    function filterUniqueES6(array) {
        if (array.constructor !== Array) {
            console.error(`${new Date()}: the passed argument is not an array:`, array);

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

    function filterUniqueWithObj(array) {
        if (array.constructor !== Array) {
            console.error(`${new Date()}: the passed argument is not an array:`, array);

            return array;
        }

        const unique = [];
        const exists = {};

        for (let i = 0, len = array.length; i < len; i++) {
            const val = array[i];

            if (!!val && !exists[val]) {
                unique.push(val);
                exists[val] = true;
            }
        }

        return unique;
    }
})();
/**
 * File to compare time execution of various built-in and custom solutions
 */

// for...of
// vs Object.keys().forEach()
// vs Object.values().forEach()
// vs Object.keys() + for...of loop
// vs Object.keys() + regular for loop
// vs Object.keys() + while loop
(function () {
    'use strict';

    const obj = {};
    const arr = [];

    for (let i = 1000000; i--;) {
        obj[`key${i}`] = `value ${i}`;
    }

    // NOTE: there is a bias towards the order of execution of the loops,
    // so it is best to try them one at a time

    // regular for...in loop
    console.time('forin');
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            arr.push(obj[key]);
        }
    }
    console.timeEnd('forin');

    // Object.keys() + forEach()
    console.time('objectkeys');
    Object.keys(obj).forEach(key => arr.push(obj[key]));
    console.timeEnd('objectkeys');

    // Object.values() + forEach()
    console.time('objectvalue');
    Object.values(obj).forEach(value => arr.push(value));
    console.timeEnd('objectvalue');

    // Object.keys() + for...of loop
    console.time('forof');
    const keys3 = Object.keys(obj);
    for (const key of keys3) {
        arr.push(obj[key]);
    }
    console.timeEnd('forof');

    // Object.keys() + regular for loop
    console.time('for');
    const keys2 = Object.keys(obj);
    for (let i = keys2.length; i--;) {
        arr.push(obj[keys2[i]]);
    }
    console.timeEnd('for');

    // Object.keys() + while loop
    console.time('while');
    const keys = Object.keys(obj);
    let len = keys.length;
    while (len--) {
        arr.push(obj[keys[len]]);
    }
    console.timeEnd('while');
})();

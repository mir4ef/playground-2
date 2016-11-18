/**
 * Created by miroslav.georgiev on 8/8/16.
 */

(function () {
    'use strict';

    const box = document.querySelector('main');
    const input = [
        '12',
        '1.2',
        '.12',
        '0.12',
        '00.12',
        '0..12',
        '01.2',
        '01',
        '00',
        '1e-2',
        '1E-2',
        '1e2',
        '1E2',
        '1e+2',
        '01e-2',
        '10e-2',
        '12e-2',
        '10e2',
        '10e+2',
        '1',
        '1,2,3',
        '1e-2,.2,0.3',
        '1e-2,.2,0.3,2e-4',
        '1e-2,.2,0.3,2ee-4',
        '1e-2,.2,0.3,2e--4',
        '1e-2,0.2,.3',
        '1e-2,0..2,..3',
        '1e-2,00.2,01.3',
        '1e-2,0.201.3',
        'na',
        'nn',
        'aa',
        'nan',
        'nana',
        'NA',
        'NAna',
    ];
    const regex1 = /^(0?\.(\d+)?[1-9](\d+)?|[1-9]e-(\d+)?[1-9](\d+)?)((,(0?\.(\d+)?[1-9](\d+)?|[1-9]e-(\d+)?[1-9](\d+)?))+)?$/i;
    const regex2 = /^(na|0?\.(\d+)?[1-9](\d+)?|[1-9](\d+)?(\.\d+)?)$/i;

    function testRegEx(arr, regex) {
        box.innerHTML += `${regex}<br />`;
        for (const val of arr) {
            console.log(`${val}: ${regex.test(val)}`);
            box.innerHTML += `${val}: ${regex.test(val)}<br />`;
        }
    }

    testRegEx(input, regex1);
    testRegEx(input, regex2);
})();
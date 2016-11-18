/**
 * Created by miroslav.georgiev on 11/6/16.
 */

(function () {
    'use strict';

    function myFn(arg, callback) {
        return callback(`${arg}slav`);
    }

    myFn(`Miro`, hanleResponse);

    function hanleResponse(name) {
        console.log(`name from callback with fn: ${name}`);
    }
})();
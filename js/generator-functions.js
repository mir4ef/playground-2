'use strict';

async function* f() {
    for (let i = 1; i < 6; i++) {
        yield i;
    }

    // for await (const val of [1, 2, 3, 4, 5]) {
    //     yield val;
    // }
}

(async function () {
    for await (const val of f()) {
        console.log(`${val}/5`);
    }
})();

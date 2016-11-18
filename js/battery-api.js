/**
 * Created by miroslav.georgiev on 8/8/16.
 */

(function () {
    'use strict';

    navigator.getBattery().then(function (battery) {
        console.log(`Battery level: ${ battery.level * 100 }%`);
    });

    navigator.geolocation.getCurrentPosition(function(position) {
        console.log(`position:`, position);
        console.log(`latitude: ${position.coords.latitude}`);
        console.log(`longitude: ${position.coords.longitude}`);
    });
})();
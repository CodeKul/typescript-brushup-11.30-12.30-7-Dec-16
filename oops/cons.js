"use strict";
var Pin = (function () {
    function Pin(ports, company) {
        this.ports = ports;
        this.company = company;
        console.log('Ports - ' + ports + ' Company - ' + company);
    }
    return Pin;
}());
exports.Pin = Pin;

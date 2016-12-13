"use strict";
var Bike = (function () {
    function Bike() {
    }
    Bike.prototype.speedUp = function () {
        console.log("speeding up");
    };
    Bike.prototype.blowHorn = function () {
        console.log("peep peep");
    };
    Bike.prototype.getLocation = function () {
        console.log("Bike is on Road");
    };
    return Bike;
}());
exports.Bike = Bike;

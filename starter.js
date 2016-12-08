"use strict";
var car_1 = require('./ts-first/oops/car');
var Starter = (function () {
    function Starter() {
    }
    Starter.prototype.whatIsLet = function () {
        var i = 10;
        if (true) {
            var i_1 = 100;
        }
        console.log('Value of I is - ' + i);
    };
    Starter.prototype.oops = function () {
        var car = new car_1.Car();
        car.setCarName('Audi');
        var carName = car.getCarName();
        console.log('Car Name is - ' + carName);
    };
    Starter.prototype.inheritance = function () {
    };
    return Starter;
}());
exports.Starter = Starter;

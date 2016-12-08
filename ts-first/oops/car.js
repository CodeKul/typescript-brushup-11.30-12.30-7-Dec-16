"use strict";
var Car = (function () {
    function Car() {
    }
    Car.prototype.getCarName = function () {
        return this.carName;
    };
    Car.prototype.setCarName = function (carName) {
        this.carName = carName;
    };
    return Car;
}());
exports.Car = Car;

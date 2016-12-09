"use strict";
var Eagle_1 = require('./inheritance/Eagle');
var Bird_1 = require('./inheritance/Bird');
var cons_1 = require('./oops/cons');
var car_1 = require('./oops/car');
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
    Starter.prototype.constructorDemo = function () {
        var pin = new cons_1.Pin();
        var pinOut = new cons_1.Pin(5, 'Logitech');
    };
    Starter.prototype.inheritance = function () {
        var bird = new Bird_1.Bird(2, 5, 'Android');
        console.log('Bird Flying Speed - ' + bird.getFlyingSpeed());
        console.log('Bird Name - ' + bird.getNameBird());
        console.log('Bird Legs - ' + bird.getLegs());
        var eagle = new Eagle_1.Eagle(15, 2, 50, 'Chetak');
        console.log('Eagle Dive Speed - ' + eagle.getDiveSpeed());
        console.log('Eagle Flying Speed - ' + eagle.getFlyingSpeed());
        console.log('Egale Name - ' + eagle.getNameBird());
        console.log('Eagle Legs - ' + eagle.getLegs());
    };
    return Starter;
}());
exports.Starter = Starter;

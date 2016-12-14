"use strict";
var mycollection_1 = require('./collections/mycollection');
var anything_1 = require('./generics/anything');
var bike_1 = require('./interfaces/bike');
var animal_1 = require('./interfaces/animal');
var pump_1 = require('./abstractclasses/pump');
var mobile_1 = require('./abstractclasses/mobile');
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
    Starter.prototype.abstractClasses = function () {
        var mobile = new mobile_1.Mobile();
        mobile.powerUp();
        var pump = new pump_1.Pump();
        pump.powerUp();
    };
    Starter.prototype.interfaces = function () {
        var animal = new animal_1.Animal();
        animal.walk();
        animal.eat();
        animal.getLocation();
        var bike = new bike_1.Bike();
        bike.speedUp();
        bike.blowHorn();
        bike.getLocation();
    };
    Starter.prototype.generics = function () {
        var numberAny = new anything_1.Anything();
        numberAny.assignType(100);
        console.log("Number any is " + numberAny.whatsCurrentType());
        var strAny = new anything_1.Anything();
        strAny.assignType('android');
        console.log("String any is " + strAny.whatsCurrentType());
    };
    Starter.prototype.collections = function () {
        var myColl = new mycollection_1.MyCollection();
        myColl.whatIsArray();
    };
    return Starter;
}());
exports.Starter = Starter;

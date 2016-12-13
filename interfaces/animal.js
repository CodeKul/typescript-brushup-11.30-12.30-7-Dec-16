"use strict";
var Animal = (function () {
    function Animal() {
    }
    Animal.prototype.walk = function () {
        console.log("Animal is walking");
    };
    Animal.prototype.eat = function () {
        console.log("Animal is eating");
    };
    Animal.prototype.getLocation = function () {
        console.log("Animal is in zoo");
    };
    return Animal;
}());
exports.Animal = Animal;

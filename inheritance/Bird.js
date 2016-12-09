"use strict";
var Bird = (function () {
    /*private legs : number; //data type
    private flyingSpeed : Number; // wrapper of number
    private nameBird : String;*/
    function Bird(legs, flyingSpeed, nameBird) {
        this.legs = legs;
        this.flyingSpeed = flyingSpeed;
        this.nameBird = nameBird;
        /*this.legs = legs;
        this.flyingSpeed = flyingSpeed;
        this.nameBird = nameBird;*/
    }
    Bird.prototype.getFlyingSpeed = function () {
        return this.flyingSpeed;
    };
    Bird.prototype.getLegs = function () {
        return this.legs;
    };
    Bird.prototype.getNameBird = function () { return this.nameBird; };
    Bird.prototype.fly = function () {
        this.flyingSpeed += 5;
    };
    return Bird;
}());
exports.Bird = Bird;

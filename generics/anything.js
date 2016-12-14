"use strict";
var Anything = (function () {
    function Anything() {
    }
    Anything.prototype.whatsCurrentType = function () {
        return this.anything;
    };
    Anything.prototype.assignType = function (anything) {
        this.anything = anything;
    };
    return Anything;
}());
exports.Anything = Anything;

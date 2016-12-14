"use strict";
var MyCollection = (function () {
    function MyCollection() {
    }
    MyCollection.prototype.whatIsArray = function () {
        var arrStr = new Array();
        arrStr[0] = 'Android';
        arrStr[1] = 'Java';
        arrStr[2] = 'TypeScript';
        arrStr[3] = 'JavaScript';
        arrStr[4] = 'NodeJs';
        arrStr.forEach(function (s) { return console.log("Lambda - " + s); });
        arrStr.forEach(function (s) {
            console.log("Traditional " + s);
        });
        arrStr.forEach(console.log);
    };
    return MyCollection;
}());
exports.MyCollection = MyCollection;

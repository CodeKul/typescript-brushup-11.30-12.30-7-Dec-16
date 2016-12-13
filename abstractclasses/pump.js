"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var device_1 = require('./device');
var Pump = (function (_super) {
    __extends(Pump, _super);
    function Pump() {
        _super.apply(this, arguments);
    }
    Pump.prototype.powerUp = function () {
        _super.prototype.power = 1;
        console.log("Pump power is " + _super.prototype.power);
    };
    return Pump;
}(device_1.Device));
exports.Pump = Pump;

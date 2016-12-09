"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Bird_1 = require('./Bird');
var Eagle /*is a bird*/ = (function (_super) {
    __extends(Eagle /*is a bird*/, _super);
    function Eagle /*is a bird*/(diveSpeed, legs, flyingSpeed, birdName) {
        _super.call(this, legs, flyingSpeed, birdName);
        this.diveSpeed = diveSpeed;
    }
    Eagle /*is a bird*/.prototype.getDiveSpeed = function () {
        return this.diveSpeed;
    };
    return Eagle /*is a bird*/;
}(Bird_1.Bird));
exports.Eagle /*is a bird*/ = Eagle /*is a bird*/;

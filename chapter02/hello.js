"use strict";
exports.__esModule = true;
exports.myName = void 0;
exports.myName = "Davi Silva";
var MyObject = /** @class */ (function () {
    function MyObject() {
    }
    MyObject.prototype.comparable = function (b) {
        if (this.age === b.age) {
            return 0;
        }
        return this.age > b.age ? 1 : -1;
    };
    return MyObject;
}());
var myVar = new MyObject();
console.log(myVar.comparable(3));

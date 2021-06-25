"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InsatllPlugin = /** @class */ (function () {
    function InsatllPlugin() {
    }
    InsatllPlugin.prototype.apply = function (complier) {
        complier.hooks.done.tap("done", function () { });
    };
    return InsatllPlugin;
}());
exports.default = InsatllPlugin;

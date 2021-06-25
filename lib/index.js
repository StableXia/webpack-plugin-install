"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var install_1 = __importDefault(require("./install"));
var InsatllPlugin = /** @class */ (function () {
    function InsatllPlugin(options) {
        this.options = options;
    }
    InsatllPlugin.prototype.apply = function (complier) {
        var _this = this;
        complier.hooks.done.tap("done", function () {
            install_1.default({
                cmd: _this.options.cmd,
                args: _this.options.args,
            });
        });
    };
    return InsatllPlugin;
}());
exports.default = InsatllPlugin;

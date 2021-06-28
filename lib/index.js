"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const install_1 = __importDefault(require("./install"));
class InsatllPlugin {
    constructor(options) {
        this.options = options;
    }
    apply(complier) {
        complier.hooks.done.tap("done", () => {
            install_1.default({
                cmd: this.options.cmd,
                args: this.options.args,
            });
        });
    }
}
exports.default = InsatllPlugin;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var runCommand_1 = __importDefault(require("./runCommand"));
function install(options) {
    var opts = {
        cmd: options.cmd,
        args: options.args,
    };
    return runCommand_1.default(opts);
}
exports.default = install;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const runCommand_1 = __importDefault(require("./runCommand"));
function install(options) {
    const opts = {
        cmd: options.cmd,
        args: options.args,
        cwd: options.cwd,
    };
    return runCommand_1.default(opts);
}
exports.default = install;

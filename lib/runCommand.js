"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const which_1 = __importDefault(require("which"));
function quoteIfNecessary(command) {
    return /\s+/.test(command) ? `"${command}"` : command;
}
function runCommand(command) {
    return new Promise((resolve, reject) => {
        which_1.default(command.cmd, (err, cmdPath) => {
            if (err) {
                return reject(new Error(`Can't install! "${command.cmd}" doesn't seem to be installed.`));
            }
            const cmd = child_process_1.spawn(quoteIfNecessary(cmdPath), command.args, {
                shell: true,
                stdio: "inherit",
                cwd: command.cwd || process.cwd(),
            });
            cmd.on("close", (code) => {
                if (code !== 0) {
                    return reject(new Error(`"${command.cmd}" exited with non-zero code ${code}`));
                }
                resolve(true);
            });
        });
    });
}
exports.default = runCommand;

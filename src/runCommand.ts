import { spawn } from "child_process";
import which from "which";

interface ICommand {
  cmd: string;
  args: string[];
  cwd?: string;
}

function quoteIfNecessary(command: string) {
  return /\s+/.test(command) ? `"${command}"` : command;
}

export default function runCommand(command: ICommand) {
  return new Promise((resolve, reject) => {
    which(command.cmd, (err, cmdPath) => {
      if (err) {
        return reject(
          new Error(
            `Can't install! "${command.cmd}" doesn't seem to be installed.`
          )
        );
      }

      const cmd = spawn(quoteIfNecessary(cmdPath as string), command.args, {
        shell: true,
        stdio: "inherit",
        cwd: command.cwd || process.cwd(),
      });
      cmd.on("close", (code) => {
        if (code !== 0) {
          return reject(
            new Error(`"${command.cmd}" exited with non-zero code ${code}`)
          );
        }

        resolve(true);
      });
    });
  });
}

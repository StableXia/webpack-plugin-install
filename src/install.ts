import runCommand from "./runCommand";

type ICmdName = "npm" | "yarn";

export interface ICmdOptions {
  cmd: ICmdName;
  args?: string[];
  cwd?: string;
}

export default function install(options: ICmdOptions) {
  const opts = {
    cmd: options.cmd,
    args: options.args,
    cwd: options.cwd,
  };

  return runCommand(opts);
}

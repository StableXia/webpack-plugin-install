import runCommand from "./runCommand";

type ICmdName = "npm" | "yarn";

interface ICmdOptions {
  cmd: ICmdName;
  args: string[];
}

export default function install(options: ICmdOptions) {
  const opts = {
    cmd: options.cmd,
    args: [],
  };

  return runCommand(opts);
}

import webpack from "webpack";
import install, { ICmdOptions } from "./install";

export type IInstallPluginOptions = ICmdOptions;

export default class InsatllPlugin {
  options: IInstallPluginOptions;

  constructor(options: IInstallPluginOptions) {
    this.options = options;
  }

  apply(complier: webpack.Compiler) {
    complier.hooks.done.tap("done", () => {
      install({
        cmd: this.options.cmd,
        args: this.options.args,
      });
    });
  }
}

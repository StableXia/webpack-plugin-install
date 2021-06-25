import webpack from "webpack";
import install, { ICmdOptions } from "./install";

export type IPluginOptions = ICmdOptions;

export default class InsatllPlugin {
  options: IPluginOptions;

  constructor(options: IPluginOptions) {
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

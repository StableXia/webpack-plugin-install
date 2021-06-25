import webpack from "webpack";

export default class InsatllPlugin {
  constructor() {}

  apply(complier: webpack.Compiler) {
    complier.hooks.done.tap("done", () => {});
  }
}

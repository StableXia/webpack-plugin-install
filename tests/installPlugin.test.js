const webapck = require("webpack");
const InsatllPlugin = require("../lib/index").default;

function testInsatllPlugin(webpackConfig, done) {
  webapck(webpackConfig, (err, stats) => {
    expect(err).toBeFalsy();
    done();
  });
}

describe("InsatllPlugin", () => {
  it("使用 yarn 安装依赖", (done) => {
    testInsatllPlugin(
      {
        plugins: [new InsatllPlugin({ cmd: "yarn", args: ["add", "webpack"] })],
      },
      done
    );
  });
});

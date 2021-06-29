const webapck = require("webpack");
const InsatllPlugin = require("../lib/index").default;
const install = require("../lib/install").default;

jest.mock("../lib/install.js");

function testInsatllPlugin(webpackConfig, done) {
  webapck(webpackConfig, (err, stats) => {
    expect(err).toBeFalsy();
    expect(install).toHaveBeenCalled();
    done();
  });
}

describe("InsatllPlugin", () => {
  it("install 被调用", (done) => {
    testInsatllPlugin(
      {
        plugins: [new InsatllPlugin({ cmd: "yarn" })],
      },
      done
    );
  });
});

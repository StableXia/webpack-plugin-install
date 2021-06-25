"use strict";
var commands = {
    tsd: ["reinstall", "--save"],
    bower: ["install", "--config.interactive=false"],
    npm: ["install"],
    pip: ["install", "-r", "requirements.txt"],
    composer: ["install"],
    typings: ["install"],
};
var defaultFileToCommand = {
    "tsd.json": "tsd",
    "bower.json": "bower",
    "package.json": "npm",
    "requirements.txt": "pip",
    "composer.json": "composer",
    "typings.json": "typings",
};

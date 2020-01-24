const snapshotTests = require("cypress-plugin-snapshots/plugin");

module.exports = (on, config) => {
  snapshotTests.initPlugin(on, config);
  return config;
};

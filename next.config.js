const path = require("path");
const withLess = require("next-with-less");

module.exports = withLess({
  sassOptions: {
    includePaths: [
      path.join(__dirname, "components"),
      path.join(__dirname, "scss"),
    ],
  },
  lessLoaderOptions: {
    lessOptions: {
      modifyVars: {
        "primary-color": "#9900FF",
      },
    },
  }
});

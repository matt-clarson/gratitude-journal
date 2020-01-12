const compression = require("compression");
const express = require("express");
const path = require("path");

const { STATIC_DIR } = process.env;
const PORT = process.env.PORT || 80;

function main() {
  const app = express();
  app.use(compression());

  app.use("/", express.static(STATIC_DIR));
  app.get("*", (req, res) => res.sendFile(path.join(STATIC_DIR, "index.html")));

  app.listen(PORT);
  console.log(`Listening on ${PORT}`);
}

if (!module.parent) {
  main();
}

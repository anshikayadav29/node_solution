// parallel-reader.js
const fs = require("fs");

function readFiles(files) {
  return Promise.all(
    files.map(f => fs.promises.readFile(f, "utf8"))
  );
}

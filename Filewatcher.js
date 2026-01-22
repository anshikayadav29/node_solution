// file-watcher.js
const fs = require("fs");

fs.watch("test.txt", () => {
  console.log("File changed!");
});

// hot-reload.js
const fs = require("fs");

fs.watch("data.txt", () => {
  console.log("File changed:", fs.readFileSync("data.txt", "utf8"));
});

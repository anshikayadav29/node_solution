// list-files.js
const fs = require("fs");

fs.readdir(".", (err, files) => {
  console.log(files);
});

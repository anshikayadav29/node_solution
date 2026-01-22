// file-size.js
const fs = require("fs");

const stats = fs.statSync("test.txt");
console.log("Size:", stats.size);

// self-modify.js
const fs = require("fs");

fs.appendFileSync(__filename, "\n// modified");
console.log("Code modified itself");

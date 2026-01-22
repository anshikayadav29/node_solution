// config-reader.js
const fs = require("fs");

const config = JSON.parse(fs.readFileSync("config.json"));
console.log(config);

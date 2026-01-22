// plugin-loader.js
const fs = require("fs");
fs.readdirSync("./plugins").forEach(p => require("./plugins/" + p)());

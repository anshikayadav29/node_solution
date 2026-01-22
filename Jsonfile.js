// write-json.js
const fs = require("fs");

fs.writeFileSync("data.json", JSON.stringify({ name: "Node" }));
console.log("File written");

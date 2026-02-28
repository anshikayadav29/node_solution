const fs = require("fs");

fs.writeFile("output.txt", "Node.js is awesome", () => {
  console.log("File written successfully");
});

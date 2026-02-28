const fs = require("fs");

fs.appendFile("output.txt", "\nLearning Node.js", () => {
  console.log("Data appended");
});

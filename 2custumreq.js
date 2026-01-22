// custom-require.js
const fs = require("fs");

function myRequire(file) {
  const code = fs.readFileSync(file, "utf8");
  eval(code);
}

myRequire("./test.js");

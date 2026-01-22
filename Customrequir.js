// require-clone.js
const fs = require("fs");
function load(file){
  const code = fs.readFileSync(file,"utf8");
  eval(code);
}
load("./test.js");

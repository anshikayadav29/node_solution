// file-lock.js
const fs = require("fs");
function lock(file) {
  if (fs.existsSync(file + ".lock")) throw "Locked";
  fs.writeFileSync(file + ".lock", "");
}
function unlock(file) {
  fs.unlinkSync(file + ".lock");
}

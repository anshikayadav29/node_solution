// wal.js
const fs = require("fs");

class WAL {
  constructor(file) {
    this.file = file;
  }

  log(entry) {
    fs.appendFileSync(this.file, JSON.stringify(entry) + "\n");
  }

  replay(fn) {
    const lines = fs.readFileSync(this.file, "utf8").split("\n");
    lines.filter(Boolean).forEach(l => fn(JSON.parse(l)));
  }
}

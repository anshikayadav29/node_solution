// file-db.js
const fs = require("fs");

class DB {
  constructor(file) {
    this.file = file;
    if (!fs.existsSync(file)) fs.writeFileSync(file, "{}");
  }

  read() {
    return JSON.parse(fs.readFileSync(this.file));
  }

  write(data) {
    fs.writeFileSync(this.file, JSON.stringify(data, null, 2));
  }

  set(key, val) {
    const d = this.read();
    d[key] = val;
    this.write(d);
  }

  get(key) {
    return this.read()[key];
  }
}

// demo
const db = new DB("data.json");
db.set("name", "Anshika");
console.log(db.get("name"));

// backpressure.js
const fs = require("fs");
const r = fs.createReadStream(__filename);
const w = fs.createWriteStream("copy.js");
r.pipe(w);

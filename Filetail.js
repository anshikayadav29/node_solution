// tail.js
const fs = require("fs");
let size = 0;
setInterval(() => {
  const s = fs.statSync("log.txt").size;
  if (s > size) {
    const stream = fs.createReadStream("log.txt",{start:size,end:s});
    stream.pipe(process.stdout);
    size = s;
  }
}, 1000);

// upload.js
const fs = require("fs");
const http = require("http");

http.createServer((req, res) => {
  const w = fs.createWriteStream("file.bin");
  req.pipe(w);
  req.on("end", () => res.end("Uploaded"));
}).listen(5000);

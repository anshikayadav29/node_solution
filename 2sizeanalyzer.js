const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
  if (!fs.existsSync("data.txt")) return res.end("No file");
  const size = fs.statSync("data.txt").size;
  res.end("Size: " + size);
}).listen(5000);

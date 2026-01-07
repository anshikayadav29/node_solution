// file-write-server.js
const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
  fs.writeFileSync("output.txt", "Node JS File Created");
  res.end("File Written");
}).listen(5000);

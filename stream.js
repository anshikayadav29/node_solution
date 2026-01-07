// stream-server.js
const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
  fs.createReadStream("data.txt").pipe(res);
}).listen(5000);

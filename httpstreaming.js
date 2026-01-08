// stream-server.js
const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
  const stream = fs.createReadStream(__filename);
  stream.pipe(res);
}).listen(5000);

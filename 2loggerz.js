const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
  fs.appendFileSync("log.txt", req.url + "\n");
  res.end("Logged");
}).listen(5000);

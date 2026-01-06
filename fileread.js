const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
  fs.readFile(__filename, (err, data) => {
    res.end(data);
  });
}).listen(5000);

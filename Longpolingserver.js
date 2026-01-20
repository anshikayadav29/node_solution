// long-polling.js
const http = require("http");

http.createServer((req, res) => {
  setTimeout(() => {
    res.end("Long polling response");
  }, 5000);
}).listen(5000);

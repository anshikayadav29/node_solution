const http = require("http");

http.createServer((req, res) => {
  res.end("Server Active: " + true);
}).listen(5000);

const http = require("http");

http.createServer((req, res) => {
  res.end("Date: " + new Date().toDateString());
}).listen(5000);

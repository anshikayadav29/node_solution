const http = require("http");

http.createServer((req, res) => {
  res.end("Time: " + new Date().toLocaleTimeString());
}).listen(5000);

const http = require("http");

http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Status OK");
}).listen(5000);

const http = require("http");

http.createServer((req, res) => {
  res.end("Request forwarded to backend (mock)");
}).listen(5000);

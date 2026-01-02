const http = require("http");

http.createServer((req, res) => {
  res.end("NODE SERVER".toLowerCase());
}).listen(5000);

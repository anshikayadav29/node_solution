const http = require("http");

http.createServer((req, res) => {
  res.end("Length: " + req.url.length);
}).listen(5000);

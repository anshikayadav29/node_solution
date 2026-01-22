const http = require("http");

http.createServer((req, res) => {
  res.end("Method: " + req.method);
}).listen(5000);

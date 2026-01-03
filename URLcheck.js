const http = require("http");

http.createServer((req, res) => {
  res.end("You opened: " + req.url);
}).listen(5000);

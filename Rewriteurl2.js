const http = require("http");

http.createServer((req, res) => {
  if (req.url === "/home") req.url = "/";
  res.end("Final URL: " + req.url);
}).listen(5000);

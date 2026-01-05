const http = require("http");

http.createServer((req, res) => {
  res.statusCode = 404;
  res.end("Page Not Found");
}).listen(5000);

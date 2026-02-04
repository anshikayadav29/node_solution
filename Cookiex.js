const http = require("http");

http.createServer((req, res) => {
  res.end(req.headers.cookie || "No Cookie");
}).listen(5000);

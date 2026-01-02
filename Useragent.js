const http = require("http");

http.createServer((req, res) => {
  res.end("Browser: " + req.headers["user-agent"]);
}).listen(5000);

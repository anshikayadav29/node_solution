const http = require("http");

http.createServer((req, res) => {
  res.end("Environment: " + process.env.NODE_ENV);
}).listen(5000);

const http = require("http");

http.createServer((req, res) => {
  res.end(process.env.NODE_ENV || "development");
}).listen(5000);

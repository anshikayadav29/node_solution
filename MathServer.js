const http = require("http");

http.createServer((req, res) => {
  res.end("Sum = " + (10 + 20));
}).listen(5000);

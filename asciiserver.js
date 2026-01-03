const http = require("http");

http.createServer((req, res) => {
  res.end("ASCII of A is " + "A".charCodeAt(0));
}).listen(5000);

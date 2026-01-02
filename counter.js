const http = require("http");
let count = 0;

http.createServer((req, res) => {
  count++;
  res.end("Visited: " + count);
}).listen(5000);

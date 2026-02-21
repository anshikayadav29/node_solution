const http = require("http");
let count = 0;

http.createServer((_, res) => {
  count++;
  res.end("Visitors: " + count);
}).listen(5000);

// rate-limit-advanced.js
const http = require("http");

let requests = 0;
setInterval(() => (requests = 0), 60000);

http.createServer((req, res) => {
  if (++requests > 5) {
    res.statusCode = 429;
    return res.end("Too Many Requests");
  }
  res.end("Allowed");
}).listen(5000);

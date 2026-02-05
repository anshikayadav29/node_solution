const http = require("http");
let queue = [];

http.createServer((req, res) => {
  queue.push(req.url);
  res.end("Queued: " + queue.join(","));
}).listen(5000);

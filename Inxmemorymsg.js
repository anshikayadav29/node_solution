const http = require("http");
const queue = [];

setInterval(() => {
  if (queue.length) console.log("Consumed:", queue.shift());
}, 1000);

http.createServer((req, res) => {
  queue.push(req.url);
  res.end("Queued");
}).listen(5000);

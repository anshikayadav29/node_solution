const http = require("http");
let queue = [];
let busy = false;

function process() {
  if (busy || queue.length === 0) return;
  busy = true;
  setTimeout(() => {
    busy = false;
    process();
  }, 1500);
}

http.createServer((req, res) => {
  queue.push(req.url);
  process();
  res.end("Queued: " + queue.length);
}).listen(5000);

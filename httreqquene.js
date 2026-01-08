// queue-server.js
const http = require("http");

let busy = false;
const queue = [];

function process(res) {
  busy = true;
  setTimeout(() => {
    res.end("Processed request");
    busy = false;
    if (queue.length) process(queue.shift());
  }, 2000);
}

http.createServer((req, res) => {
  if (busy) queue.push(res);
  else process(res);
}).listen(5000);

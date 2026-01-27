const http = require("http");
let queue = [];

http.createServer((req, res) => {
  if (req.url === "/add") {
    queue.push(Date.now());
    res.end("Task Added");
  } else if (req.url === "/process") {
    res.end(queue.shift() ? "Task Done" : "No Task");
  } else {
    res.end("Queue size: " + queue.length);
  }
}).listen(5000);

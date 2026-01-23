const http = require("http");
let heap = [];

http.createServer((req, res) => {
  heap.push(Buffer.alloc(5e6));
  res.end("Heap chunks: " + heap.length);
}).listen(5000);

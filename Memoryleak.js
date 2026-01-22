// memory-leak.js
const http = require("http");
let arr = [];

http.createServer((req, res) => {
  arr.push(new Array(1e6).fill("leak"));
  res.end("Heap growing");
}).listen(5000);

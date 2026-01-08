// size-limit.js
const http = require("http");

http.createServer((req, res) => {
  let size = 0;
  req.on("data", chunk => {
    size += chunk.length;
    if (size > 1000) res.end("Payload Too Large");
  });
  req.on("end", () => res.end("OK"));
}).listen(5000);

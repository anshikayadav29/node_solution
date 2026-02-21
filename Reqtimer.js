const http = require("http");

http.createServer((_, res) => {
  const start = Date.now();
  setTimeout(() => res.end("Time: " + (Date.now() - start)), 300);
}).listen(5000);

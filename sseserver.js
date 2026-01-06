const http = require("http");

http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache"
  });
  setInterval(() => {
    res.write(`data: ${new Date().toLocaleTimeString()}\n\n`);
  }, 1000);
}).listen(5000);

const http = require("http");

http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache"
  });

  let i = 0;
  setInterval(() => {
    res.write(`data: Message ${++i}\n\n`);
  }, 1000);
}).listen(5000);

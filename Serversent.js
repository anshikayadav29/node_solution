const http = require("http");

http.createServer((req, res) => {
  if (req.url === "/events") {
    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "Connection": "keep-alive"
    });

    let count = 0;
    const id = setInterval(() => {
      res.write(`data: Message ${++count}\n\n`);
      if (count === 5) {
        clearInterval(id);
        res.end();
      }
    }, 1000);
  } else {
    res.end("Go to /events");
  }
}).listen(5000, () => console.log("SSE server on 5000"));

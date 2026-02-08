const http = require("http");

http.createServer((req, res) => {
  const timer = setTimeout(() => {
    res.writeHead(408);
    res.end("Timeout");
  }, 2000);

  req.on("end", () => {
    clearTimeout(timer);
    res.end("Success");
  });
}).listen(5000);

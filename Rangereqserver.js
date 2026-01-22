const http = require("http");

http.createServer((req, res) => {
  const range = req.headers.range;
  if (range) {
    res.writeHead(206);
    res.end("Partial Content");
  } else {
    res.end("Full Content");
  }
}).listen(5000);

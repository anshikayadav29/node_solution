const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/stop") {
    res.end("Stopping");
    server.close();
  } else {
    res.end("Running");
  }
}).listen(5000);

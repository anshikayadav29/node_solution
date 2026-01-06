const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Server will stop");
  server.close();
});

server.listen(5000);

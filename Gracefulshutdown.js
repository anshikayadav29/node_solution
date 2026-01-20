// graceful-server.js
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Running");
});

process.on("SIGINT", () => {
  server.close(() => process.exit());
});

server.listen(5000);

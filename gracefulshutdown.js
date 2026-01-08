// graceful.js
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Running");
});

process.on("SIGINT", () => {
  console.log("Shutting down...");
  server.close(() => process.exit());
});

server.listen(5000);

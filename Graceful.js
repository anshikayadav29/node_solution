const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Running");
}).listen(5000);

process.on("SIGINT", () => {
  server.close(() => {
    console.log("Graceful Shutdown");
    process.exit();
  });
});

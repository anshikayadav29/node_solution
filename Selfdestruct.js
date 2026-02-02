const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Server Alive");
}).listen(5000);

setTimeout(() => {
  server.close();
  console.log("Server Stopped");
}, 10000);

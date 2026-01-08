// delay-server.js
const http = require("http");

http.createServer((req, res) => {
  setTimeout(() => res.end("Delayed Response"), 4000);
}).listen(5000);

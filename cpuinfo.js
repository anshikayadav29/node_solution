// cpu-server.js
const http = require("http");
const os = require("os");

http.createServer((req, res) => {
  res.end("CPU Count: " + os.cpus().length);
}).listen(5000);

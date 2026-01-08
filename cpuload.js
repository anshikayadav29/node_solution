// cpu-load.js
const http = require("http");
const os = require("os");

http.createServer((req, res) => {
  res.end("Load Avg: " + os.loadavg().join(", "));
}).listen(5000);

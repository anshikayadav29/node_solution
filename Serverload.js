const http = require("http");
const os = require("os");

http.createServer((req, res) => {
  res.end("Load: " + os.loadavg()[0]);
}).listen(5000);

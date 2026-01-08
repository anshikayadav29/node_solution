// cluster-server.js
const cluster = require("cluster");
const http = require("http");
const os = require("os");

if (cluster.isPrimary) {
  os.cpus().forEach(() => cluster.fork());
} else {
  http.createServer((req, res) => {
    res.end("Worker PID: " + process.pid);
  }).listen(5000);
}

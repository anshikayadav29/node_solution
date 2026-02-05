const cluster = require("cluster");
const http = require("http");
const os = require("os");

if (cluster.isMaster) {
  os.cpus().forEach(() => cluster.fork());
} else {
  http.createServer((req, res) => {
    res.end("Handled by PID " + process.pid);
  }).listen(5000);
}

// cluster-server.js
const cluster = require("cluster");
const http = require("http");
const os = require("os");

if (cluster.isPrimary) {
  for (let i = 0; i < os.cpus().length; i++) cluster.fork();
} else {
  http.createServer((req, res) => {
    res.end(`Worker ${process.pid}`);
  }).listen(5000);
}

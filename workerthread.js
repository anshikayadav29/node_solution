// worker-server.js
const http = require("http");
const { Worker, isMainThread, parentPort } = require("worker_threads");

if (isMainThread) {
  http.createServer((req, res) => {
    const worker = new Worker(__filename);
    worker.on("message", msg => res.end(msg.toString()));
  }).listen(5000);
} else {
  let sum = 0;
  for (let i = 0; i < 1e9; i++) sum += i;
  parentPort.postMessage(sum);
}

const http = require("http");
const { Worker } = require("worker_threads");

const buf = new SharedArrayBuffer(4);
const arr = new Int32Array(buf);

new Worker(`
  const { workerData } = require("worker_threads");
  Atomics.add(workerData, 0, 5);
`, { eval: true, workerData: arr });

http.createServer((req, res) => {
  res.end("Value: " + Atomics.load(arr, 0));
}).listen(5000);

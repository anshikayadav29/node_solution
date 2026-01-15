// worker.js
const { Worker, isMainThread, parentPort } = require("worker_threads");

if (isMainThread) {
  new Worker(__filename);
} else {
  let sum = 0;
  for (let i = 0; i < 1e7; i++) sum += i;
  parentPort.postMessage(sum);
}

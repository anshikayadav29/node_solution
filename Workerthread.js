// worker.js
const { Worker, isMainThread, parentPort } = require("worker_threads");
if (isMainThread) {
  new Worker(__filename).on("message", console.log);
} else {
  let s = 0; for (let i=0;i<1e8;i++) s+=i;
  parentPort.postMessage(s);
}

const http = require("http");
const { Worker } = require("worker_threads");

function run() {
  return new Promise(r => {
    const w = new Worker(`const {parentPort}=require('worker_threads');
      parentPort.postMessage(2+2);`, { eval:true });
    w.on("message", r);
  });
}

http.createServer(async (req, res) => {
  const results = await Promise.all([run(), run()]);
  res.end(results.join(","));
}).listen(5000);

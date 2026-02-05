const http = require("http");
const { Worker } = require("worker_threads");

http.createServer((req, res) => {
  if (req.url === "/heavy") {
    const worker = new Worker(`
      const { parentPort } = require("worker_threads");
      let sum = 0;
      for (let i = 0; i < 1e9; i++) sum += i;
      parentPort.postMessage(sum);
    `, { eval: true });

    worker.on("message", msg => res.end("Result: " + msg));
  } else {
    res.end("Normal Request");
  }
}).listen(5000, () => console.log("Worker server on 5000"));

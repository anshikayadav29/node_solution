const http = require("http");

let queue = [];

setInterval(() => {
  if (!queue.length) return;
  const job = queue.shift();
  if (Math.random() < 0.5) {
    job.retry++;
    if (job.retry < 3) queue.push(job);
  }
}, 1000);

http.createServer((req, res) => {
  queue.push({ retry: 0 });
  res.end("Job Added | Queue: " + queue.length);
}).listen(5000);

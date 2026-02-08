const http = require("http");

function heavyWork(i, cb) {
  if (i === 0) return cb();
  setImmediate(() => heavyWork(i - 1, cb));
}

http.createServer((req, res) => {
  heavyWork(1e5, () => res.end("Completed without block"));
}).listen(5000);

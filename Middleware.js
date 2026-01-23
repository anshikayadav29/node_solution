const http = require("http");

const middlewares = [
  (req, res, next) => { req.start = Date.now(); next(); },
  (req, res, next) => { res.time = Date.now() - req.start; next(); }
];

http.createServer((req, res) => {
  let i = 0;
  const run = () => middlewares[i++]?.(req, res, run) || res.end("Time " + res.time);
  run();
}).listen(5000);

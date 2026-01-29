const http = require("http");

const middlewares = [
  (req) => req.step1 = true,
  (req) => req.step2 = true
];

http.createServer((req, res) => {
  middlewares.forEach(m => m(req));
  res.end(JSON.stringify(req));
}).listen(5000);

// reverse-proxy.js
const http = require("http");

http.createServer((req, res) => {
  const proxy = http.request(
    { host: "example.com", path: req.url },
    r => r.pipe(res)
  );
  req.pipe(proxy);
}).listen(5000);

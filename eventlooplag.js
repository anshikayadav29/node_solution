const http = require("http");

let last = Date.now();
setInterval(() => {
  const lag = Date.now() - last - 100;
  if (lag > 50) console.log("Lag:", lag);
  last = Date.now();
}, 100);

http.createServer((req, res) => res.end("Monitoring")).listen(5000);

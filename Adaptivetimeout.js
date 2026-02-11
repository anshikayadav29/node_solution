const http = require("http");
let avg = 1000;

http.createServer((req, res) => {
  const start = Date.now();
  setTimeout(() => {
    avg = (avg + (Date.now() - start)) / 2;
    res.end("Avg Time: " + avg.toFixed(0));
  }, avg);
}).listen(5000);

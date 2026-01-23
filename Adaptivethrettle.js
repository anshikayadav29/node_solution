const http = require("http");
let delay = 0;

http.createServer((req, res) => {
  delay = delay > 3000 ? 0 : delay + 500;
  setTimeout(() => res.end("Delay " + delay), delay);
}).listen(5000);

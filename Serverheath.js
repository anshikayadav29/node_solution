const http = require("http");
let health = 100;

http.createServer((req, res) => {
  health -= 5;
  res.end("Health " + Math.max(health, 0));
}).listen(5000);

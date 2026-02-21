const http = require("http");
let on = false;

http.createServer((_, res) => {
  on = !on;
  res.end(on ? "ON" : "OFF");
}).listen(5000);

const http = require("http");
let count = 0;

http.createServer((req, res) => {
  count++;
  res.end(`Count: ${count} Time: ${new Date()}`);
}).listen(5000);

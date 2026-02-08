const http = require("http");
let logs = [];

http.createServer((req, res) => {
  logs.push(req.url);
  if (logs.length > 5) logs.shift();
  res.end(JSON.stringify(logs));
}).listen(5000);

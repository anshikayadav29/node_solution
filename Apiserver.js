const http = require("http");

http.createServer((_, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ status: "OK", port: 5000 }));
}).listen(5000);

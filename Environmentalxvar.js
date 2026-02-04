const http = require("http");

http.createServer((req, res) => {
  res.end(process.env.USERNAME || "No User");
}).listen(5000);

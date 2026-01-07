// post-server.js
const http = require("http");

http.createServer((req, res) => {
  let body = "";
  req.on("data", chunk => body += chunk);
  req.on("end", () => res.end("Data: " + body));
}).listen(5000);

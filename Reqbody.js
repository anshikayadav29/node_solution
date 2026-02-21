const http = require("http");

http.createServer((req, res) => {
  let body = "";
  req.on("data", c => body += c);
  req.on("end", () => res.end("Body: " + body));
}).listen(5000);

const http = require("http");

http.createServer((req, res) => {
  let size = 0;
  req.on("data", c => {
    size += c.length;
    if (size > 1000) res.end("Too Large");
  });
  req.on("end", () => res.end("Accepted"));
}).listen(5000);

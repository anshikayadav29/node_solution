// range-server.js
const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
  const stat = fs.statSync(__filename);
  const range = req.headers.range;
  if (!range) return res.end("Range header required");

  const start = Number(range.replace(/\D/g, ""));
  res.writeHead(206, {
    "Content-Range": `bytes ${start}-${stat.size}/${stat.size}`
  });
  fs.createReadStream(__filename, { start }).pipe(res);
}).listen(5000);

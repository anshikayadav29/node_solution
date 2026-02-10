const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
  const file = fs.statSync("data.txt");
  const range = req.headers.range;
  if (!range) return res.end("No Range");

  const [start, end] = range.replace(/bytes=/, "").split("-");
  res.writeHead(206, {
    "Content-Range": `bytes ${start}-${end || file.size - 1}/${file.size}`
  });
  fs.createReadStream("data.txt", { start:+start, end:+end }).pipe(res);
}).listen(5000);

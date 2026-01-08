// upload-server.js
const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
  if (req.method === "POST") {
    const stream = fs.createWriteStream("data.txt");
    req.pipe(stream);
    req.on("end", () => res.end("File Saved"));
  } else res.end("Send POST");
}).listen(5000);

const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
  if (req.method === "POST") {
    const data = [];
    req.on("data", chunk => data.push(chunk));
    req.on("end", () => {
      fs.writeFileSync("upload.bin", Buffer.concat(data));
      res.end("File Uploaded");
    });
  } else {
    res.end("POST file");
  }
}).listen(5000);

const http = require("http");
const fs = require("fs");

fs.watch("data.txt", () => console.log("File Changed"));

http.createServer((req, res) => {
  res.end("Watching File");
}).listen(5000);

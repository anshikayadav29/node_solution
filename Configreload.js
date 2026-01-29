const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
  const config = JSON.parse(fs.readFileSync("config.json", "utf8"));
  res.end("Mode: " + config.mode);
}).listen(5000);

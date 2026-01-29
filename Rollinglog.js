const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
  const log = `${new Date().toISOString()} ${req.url}\n`;
  fs.appendFileSync("rolling.log", log);
  res.end("Logged");
}).listen(5000);

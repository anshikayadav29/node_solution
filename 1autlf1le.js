const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
  if (fs.existsSync("data.txt"))
    fs.copyFileSync("data.txt", "backup.txt");
  res.end("Backup Done");
}).listen(5000);

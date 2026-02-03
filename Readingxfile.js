const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
  const data = fs.readFileSync("data.txt", "utf8");
  res.end(data);
}).listen(5000);

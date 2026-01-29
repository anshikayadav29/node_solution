const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
  let c = fs.existsSync("count.txt") ? +fs.readFileSync("count.txt") : 0;
  fs.writeFileSync("count.txt", ++c + "");
  res.end("Count: " + c);
}).listen(5000);

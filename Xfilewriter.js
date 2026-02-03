const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
  fs.writeFileSync("user.json", JSON.stringify({ time: Date.now() }));
  res.end("Saved");
}).listen(5000);

const http = require("http");
let db = [];

http.createServer((req, res) => {
  if (req.url === "/add") db.push(Date.now());
  if (req.url === "/all") return res.end(JSON.stringify(db));
  res.end("OK");
}).listen(5000);

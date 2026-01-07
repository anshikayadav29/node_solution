const http = require("http");
const url = require("url");

http.createServer((req, res) => {
  const q = url.parse(req.url, true).query;
  res.end("Name: " + (q.name || "Guest"));
}).listen(5000);

console.log("Query server running on 5000");

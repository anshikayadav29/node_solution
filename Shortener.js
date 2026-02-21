const http = require("http");
const map = {};
let id = 1;

http.createServer((req, res) => {
  if (req.url.startsWith("/new")) {
    const key = id++;
    map[key] = "https://example.com";
    return res.end("Short URL: /" + key);
  }
  const key = req.url.slice(1);
  res.end(map[key] || "Not Found");
}).listen(5000);

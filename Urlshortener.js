const http = require("http");
const map = {};

http.createServer((req, res) => {
  if (req.url.startsWith("/add")) {
    const key = Math.random().toString(36).slice(2, 7);
    map[key] = "https://google.com";
    res.end(key);
  } else {
    const key = req.url.slice(1);
    res.end(map[key] || "Not Found");
  }
}).listen(5000);

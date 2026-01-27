const http = require("http");

function task(ms) {
  return new Promise(r => setTimeout(() => r(ms), ms));
}

http.createServer(async (req, res) => {
  const r = await Promise.all([task(500), task(1000)]);
  res.end("Done: " + r.join(","));
}).listen(5000);

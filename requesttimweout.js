// timeout-server.js
const http = require("http");

http.createServer(async (req, res) => {
  const controller = new AbortController();
  setTimeout(() => controller.abort(), 2000);

  try {
    await new Promise(r => setTimeout(r, 5000));
    res.end("Completed");
  } catch {
    res.end("Request Timed Out");
  }
}).listen(5000);

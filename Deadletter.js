const http = require("http");
const dlq = [];

http.createServer((req, res) => {
  try {
    if (Math.random() < 0.4) throw "Error";
    res.end("Processed");
  } catch {
    dlq.push(req.url);
    res.end("Sent to DLQ");
  }
}).listen(5000);

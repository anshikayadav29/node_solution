// body-parser.js
const http = require("http");

http.createServer((req, res) => {
  let body = "";
  req.on("data", chunk => body += chunk);
  req.on("end", () => {
    const data = JSON.parse(body || "{}");
    res.end("Received: " + JSON.stringify(data));
  });
}).listen(5000);

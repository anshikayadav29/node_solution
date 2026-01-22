const http = require("http");

http.createServer((req, res) => {
  let body = "";
  req.on("data", c => body += c);
  req.on("end", () => {
    try {
      const data = JSON.parse(body);
      res.end("Parsed: " + data.name);
    } catch {
      res.end("Invalid JSON");
    }
  });
}).listen(5000);

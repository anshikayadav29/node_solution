const http = require("http");

http.createServer((req, res) => {
  let body = "";
  req.on("data", c => body += c);
  req.on("end", () => {
    try {
      const json = JSON.parse(body);
      res.end("Keys: " + Object.keys(json).length);
    } catch {
      res.end("Invalid JSON");
    }
  });
}).listen(5000);

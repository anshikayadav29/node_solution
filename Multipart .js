const http = require("http");

http.createServer((req, res) => {
  let data = "";
  req.on("data", c => data += c);
  req.on("end", () => {
    res.end("Size: " + data.length);
  });
}).listen(5000);

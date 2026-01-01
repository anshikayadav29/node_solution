const http = require("http");

http.createServer((req, res) => {
  if (req.method === "GET") {
    res.end("This is GET request");
  }
}).listen(5006);

console.log("Server running on 5006");

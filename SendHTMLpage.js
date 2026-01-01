const http = require("http");

http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello from Node Server</h1>");
}).listen(5003);

console.log("Server running on 5003");

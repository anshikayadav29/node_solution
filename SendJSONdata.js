const http = require("http");

http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ name: "Anshika", role: "Student" }));
}).listen(5004);

console.log("Server running on 5004");

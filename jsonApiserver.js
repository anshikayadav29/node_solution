// json-api.js
const http = require("http");

http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ name: "Anshika", role: "Student" }));
}).listen(5000);

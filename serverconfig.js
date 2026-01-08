// config-server.js
const http = require("http");
const fs = require("fs");

const config = JSON.parse(fs.readFileSync("config.json", "utf8"));

http.createServer((req, res) => {
  res.end("App: " + config.app);
}).listen(5000);

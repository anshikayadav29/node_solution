const http = require("http");
const fs = require("fs");

let config = JSON.parse(fs.readFileSync("config.json"));

fs.watch("config.json", () => {
  config = JSON.parse(fs.readFileSync("config.json"));
});

http.createServer((req, res) => {
  res.end(JSON.stringify(config));
}).listen(5000);

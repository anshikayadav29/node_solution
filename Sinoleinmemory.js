const http = require("http");
const sessions = {};

http.createServer((req, res) => {
  const id = Math.random().toString(36);
  sessions[id] = { time: Date.now() };
  res.end("Session created: " + id);
}).listen(5000);

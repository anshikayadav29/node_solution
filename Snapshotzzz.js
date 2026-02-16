const http = require("http");
let state = 0;
let snapshot = 0;

http.createServer((req, res) => {
  if (req.url === "/snap") snapshot = state;
  if (req.url === "/restore") state = snapshot;
  state++;
  res.end("State: " + state);
}).listen(5000);

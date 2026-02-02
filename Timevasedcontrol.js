const http = require("http");

http.createServer((req, res) => {
  const hour = new Date().getHours();
  if (hour < 9 || hour > 18) return res.end("Closed");
  res.end("Open");
}).listen(5000);

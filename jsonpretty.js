const http = require("http");

http.createServer((req, res) => {
  const data = { lang: "Node", level: "Beginner" };
  res.end(JSON.stringify(data, null, 2));
}).listen(5000);

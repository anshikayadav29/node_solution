const http = require("http");

http.createServer((req, res) => {
  const html = `<h1>User: ${req.url.slice(1)}</h1>`;
  res.setHeader("Content-Type","text/html");
  res.end(html);
}).listen(5000);

const http = require("http");

http.createServer((req, res) => {
  let n = 5, out = "";
  for (let i = 1; i <= 10; i++) out += `${n} x ${i} = ${n*i}\n`;
  res.end(out);
}).listen(5000);

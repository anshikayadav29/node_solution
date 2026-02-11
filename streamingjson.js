const http = require("http");

http.createServer((req, res) => {
  res.write("[");
  let i = 0;
  const id = setInterval(() => {
    res.write(JSON.stringify({ n: ++i }) + (i < 5 ? "," : ""));
    if (i === 5) {
      clearInterval(id);
      res.end("]");
    }
  }, 400);
}).listen(5000);

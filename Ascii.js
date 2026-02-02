const http = require("http");

http.createServer((req, res) => {
  let p = 0;
  const id = setInterval(() => {
    res.write("#");
    if (++p === 10) {
      clearInterval(id);
      res.end("\nDone");
    }
  }, 300);
}).listen(5000);

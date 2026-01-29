const http = require("http");

http.createServer((req, res) => {
  res.write("Start\n");
  let i = 0;
  const id = setInterval(() => {
    res.write("Chunk " + ++i + "\n");
    if (i === 5) {
      clearInterval(id);
      res.end("End");
    }
  }, 1000);
}).listen(5000);

const http = require("http");

http.createServer((req, res) => {
  res.write("Chunk 1\n");
  setTimeout(() => res.write("Chunk 2\n"), 1000);
  setTimeout(() => {
    res.write("Chunk 3\n");
    res.end();
  }, 2000);
}).listen(5000);

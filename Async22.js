const http = require("http");

async function* stream() {
  for (let i = 1; i <= 5; i++) {
    yield `Chunk ${i}\n`;
    await new Promise(r => setTimeout(r, 500));
  }
}

http.createServer(async (req, res) => {
  for await (const c of stream()) res.write(c);
  res.end();
}).listen(5000);

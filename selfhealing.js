const http = require("http");

function start() {
  const server = http.createServer((req,res)=>{
    if (req.url === "/crash") process.exit(1);
    res.end("Alive");
  }).listen(5000);

  process.on("exit", () => start());
}

start();

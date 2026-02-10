const http = require("http");
let server;

function start() {
  server = http.createServer((req,res)=>res.end("Running"));
  server.listen(5000);
}

process.on("SIGHUP", () => {
  server.close(start);
});

start();

const http = require("http");

http.createServer((req, res) => {
  req.on("close", () => console.log("Client Aborted"));
  setTimeout(() => res.end("Done"), 3000);
}).listen(5000);

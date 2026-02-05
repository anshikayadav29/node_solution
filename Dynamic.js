const http = require("http");
let port = 5000;

function start() {
  const server = http.createServer((req, res) => res.end("Port " + port));
  server.listen(port, () => console.log("Running on", port));

  server.on("error", () => {
    port++;
    start();
  });
}

start();

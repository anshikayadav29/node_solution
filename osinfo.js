const http = require("http");
const os = require("os");

http.createServer((req, res) => {
  res.end("OS Platform: " + os.platform());
}).listen(5000);

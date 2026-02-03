const http = require("http");
const os = require("os");

http.createServer((req, res) => {
  res.end(os.platform() + " " + os.arch());
}).listen(5000);

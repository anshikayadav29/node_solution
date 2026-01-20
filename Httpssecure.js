// https-server.js
const https = require("https");
const fs = require("fs");

https.createServer({
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem")
}, (req, res) => {
  res.end("Secure HTTPS Server");
}).listen(5000);

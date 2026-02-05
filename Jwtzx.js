const http = require("http");
const crypto = require("crypto");

http.createServer((req, res) => {
  const header = Buffer.from(JSON.stringify({ alg: "HS256", typ: "JWT" })).toString("base64");
  const payload = Buffer.from(JSON.stringify({ user: "admin" })).toString("base64");
  const sign = crypto.createHmac("sha256", "secret").update(header + "." + payload).digest("base64");

  res.end(`${header}.${payload}.${sign}`);
}).listen(5000);

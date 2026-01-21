const http = require("http");
const crypto = require("crypto");

http.createServer((req,res)=>{
  const q = new URL(req.url,"http://x").searchParams;
  const sign = crypto.createHash("md5").update(q.get("data")).digest("hex");
  res.end(sign === q.get("sig") ? "Valid" : "Invalid");
}).listen(5000);

const http=require("http");
const crypto=require("crypto");

http.createServer((req,res)=>{
  res.end(
    crypto.createHash("sha256").update(req.url).digest("hex").slice(0,8)
  );
}).listen(5000);

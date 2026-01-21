const http = require("http");

http.createServer((req,res)=>{
  const cookies = Object.fromEntries(
    (req.headers.cookie||"").split("; ").map(c=>c.split("="))
  );
  res.end(JSON.stringify(cookies));
}).listen(5000);

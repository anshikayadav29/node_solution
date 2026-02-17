const http = require("http");
let checksum=0;

http.createServer((req,res)=>{
  for(const c of req.url) checksum+=c.charCodeAt(0);
  res.end("Checksum: "+checksum);
}).listen(5000);

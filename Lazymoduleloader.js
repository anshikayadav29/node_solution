const http = require("http");

http.createServer((req,res)=>{
  if(req.url==="/os"){
    const os=require("os");
    res.end(os.hostname());
  }
}).listen(5000);

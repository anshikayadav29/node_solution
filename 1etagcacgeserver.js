const http = require("http");

http.createServer((req,res)=>{
  const tag = "v1";
  if(req.headers["if-none-match"]===tag){
    res.statusCode=304; return res.end();
  }
  res.setHeader("ETag",tag);
  res.end("Fresh Data");
}).listen(5000);

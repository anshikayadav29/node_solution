const http=require("http");
let authorized=false;

http.createServer((req,res)=>{
  if(req.url==="/login") authorized=true;
  res.end(authorized?"Access":"Denied");
}).listen(5000);

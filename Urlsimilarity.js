
const http=require("http");
let last="";

http.createServer((req,res)=>{
  res.end(req.url===last?"Same":"Different");
  last=req.url;
}).listen(5000);

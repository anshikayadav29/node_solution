const http=require("http");
let fn = ()=>"ONE";

http.createServer((req,res)=>{
  res.end(fn());
  fn = fn===(()=> "ONE") ? ()=>"TWO" : ()=>"ONE";
}).listen(5000);

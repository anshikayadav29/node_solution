const http = require("http");
let q=[];

setInterval(()=>{
  if(q.length) q.sort((a,b)=>b.p-a.p).shift().res.end("Processed");
},1000);

http.createServer((req,res)=>{
  q.push({p:req.url.length,res});
}).listen(5000);

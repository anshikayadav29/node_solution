const http = require("http");

http.createServer((req,res)=>{
  let i=0;
  const id=setInterval(()=>{
    res.write("Chunk "+(++i)+"\n");
    if(i===5){ clearInterval(id); res.end(); }
  },500);
}).listen(5000);

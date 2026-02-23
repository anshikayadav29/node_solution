const http = require("http");

http.createServer((_,res)=>{
  let i=0;
  const id=setInterval(()=>{
    if(i>5) return clearInterval(id),res.end();
    res.write("Chunk "+i+++"\n");
  },500);
}).listen(5000);

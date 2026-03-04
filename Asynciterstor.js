const http = require("http");

async function* gen(){
  let i=0;
  while(i<5){ yield "Tick "+i++; await new Promise(r=>setTimeout(r,500)); }
}

http.createServer(async(_,res)=>{
  for await (const v of gen()) res.write(v+"\n");
  res.end();
}).listen(5000);

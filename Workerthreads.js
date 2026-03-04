const { Worker } = require("worker_threads");
const http = require("http");

function runTask(n){
  return new Promise(res=>{
    const w = new Worker(`
      const { parentPort } = require("worker_threads");
      parentPort.postMessage(${n}*${n});
    `,{eval:true});
    w.on("message",res);
  });
}

http.createServer(async(_,res)=>{
  const out = await Promise.all([runTask(10),runTask(20)]);
  res.end("Results: "+out.join(","));
}).listen(5000);

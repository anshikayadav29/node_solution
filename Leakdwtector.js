const used=[];
setInterval(()=>{
  used.push(Buffer.alloc(1e6));
  console.log(process.memoryUsage().heapUsed/1024/1024,"MB");
},500);

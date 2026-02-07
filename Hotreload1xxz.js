const fs=require("fs");
fs.watch(__filename,()=>console.log("Reload"));

require("http").createServer((r,s)=>s.end("Watch")).listen(5000);

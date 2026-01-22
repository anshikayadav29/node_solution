const http=require("http");
let jobs=[];

setInterval(()=>{
  if(jobs.length) jobs.shift()();
},2000);

http.createServer((req,res)=>{
  jobs.push(()=>console.log("JOB DONE"));
  res.end("Job Queued");
}).listen(5000);

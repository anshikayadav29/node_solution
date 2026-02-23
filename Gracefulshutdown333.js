const http = require("http");

const server=http.createServer((_,res)=>res.end("Running")).listen(5000);

process.on("SIGINT",()=>{
  console.log("Shutting down...");
  server.close(()=>process.exit());
});

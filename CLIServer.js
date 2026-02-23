const http = require("http");

console.log("Args:",process.argv.slice(2));

http.createServer((_,res)=>res.end("CLI+Server")).listen(5000);

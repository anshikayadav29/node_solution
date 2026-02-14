const http = require("http");
const fs = require("fs");

class WAL {
  log(data) {
    fs.appendFileSync("wal.log", JSON.stringify(data)+"\n");
  }
}

const wal = new WAL();

http.createServer((req,res)=>{
  wal.log({time:Date.now()});
  res.end("Logged");
}).listen(5000);

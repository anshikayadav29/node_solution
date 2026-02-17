const http = require("http");
let seed = 42;

function rand(){
  seed = (seed * 16807) % 2147483647;
  return seed;
}

http.createServer((_,res)=>res.end("Rand: "+rand())).listen(5000);

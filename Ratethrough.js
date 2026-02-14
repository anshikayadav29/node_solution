const http = require("http");

const cache = new Map();

function fetchData(key){
  if(cache.has(key)) return cache.get(key);
  const val = Date.now();
  cache.set(key,val);
  return val;
}

http.createServer((req,res)=>{
  res.end(String(fetchData("data")));
}).listen(5000);

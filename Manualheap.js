const http = require("http");
const heap = new Array(10).fill(null);

function alloc(v){
  const i = heap.indexOf(null);
  if(i>=0) heap[i]=v;
}

http.createServer((_,res)=>{
  alloc(Date.now());
  res.end(JSON.stringify(heap));
}).listen(5000);

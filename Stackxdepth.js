const http=require("http");

function deep(n){ return n?deep(n-1):"OK"; }

http.createServer((r,s)=>s.end(deep(50))).listen(5000);

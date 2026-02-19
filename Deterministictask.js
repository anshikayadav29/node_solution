const http = require("http");

const graph = {
  A: ["B","C"],
  B: ["D"],
  C: [],
  D: []
};

function dfs(n,seen=new Set()){
  if(seen.has(n)) return [];
  seen.add(n);
  return [n,...(graph[n]||[]).flatMap(x=>dfs(x,seen))];
}

http.createServer((_,res)=>res.end(dfs("A").join("→"))).listen(5000);

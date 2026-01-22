// topo.js
function topo(g){
  const v=new Set(),o=[];
  const dfs=n=>{if(v.has(n))return;v.add(n);(g[n]||[]).forEach(dfs);o.push(n)}
  Object.keys(g).forEach(dfs);return o.reverse()
}

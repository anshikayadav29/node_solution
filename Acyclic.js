function isDAG(g){
  const v=new Set(),s=new Set();
  const dfs=n=>{
    if(s.has(n)) return false;
    if(v.has(n)) return true;
    s.add(n); v.add(n);
    return (g[n]||[]).every(dfs);
  };
  return Object.keys(g).every(dfs);
}
console.log(isDAG({A:["B"],B:["C"],C:[]}));

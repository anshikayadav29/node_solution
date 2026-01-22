// deadlock.js
function detect(graph) {
  const visited=new Set();
  function dfs(n, stack=new Set()) {
    if(stack.has(n)) return true;
    if(visited.has(n)) return false;
    visited.add(n); stack.add(n);
    for(const x of graph[n]||[]) if(dfs(x,stack)) return true;
    stack.delete(n);
  }
  return Object.keys(graph).some(dfs);
}

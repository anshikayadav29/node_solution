// dependency-graph.js
function resolve(graph) {
  const visited = new Set();
  function dfs(n) {
    if (visited.has(n)) return;
    visited.add(n);
    (graph[n] || []).forEach(dfs);
    console.log(n);
  }
  Object.keys(graph).forEach(dfs);
}

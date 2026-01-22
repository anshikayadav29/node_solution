// cycle-detect.js
function hasCycle(graph) {
  const seen = new Set(), stack = new Set();

  function dfs(n) {
    if (stack.has(n)) return true;
    if (seen.has(n)) return false;
    seen.add(n);
    stack.add(n);
    for (const x of graph[n] || []) {
      if (dfs(x)) return true;
    }
    stack.delete(n);
    return false;
  }

  return Object.keys(graph).some(dfs);
}

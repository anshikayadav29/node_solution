const nodeA={a:1}, nodeB={b:2};

function merge(x,y){
  const r={};
  for(const k of new Set([...Object.keys(x),...Object.keys(y)]))
    r[k]=Math.max(x[k]||0,y[k]||0);
  return r;
}
console.log(merge(nodeA,nodeB));

const nodes=["A","B","C"];
function pick(key){
  const h=key.length;
  return nodes[h % nodes.length];
}
console.log(pick("user123"), pick("order99"));

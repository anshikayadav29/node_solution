let level=0;
setInterval(()=>level=Math.max(0,level-1),1000);

function allow(){
  if(level>=5) return false;
  level++; return true;
}
console.log(allow(),allow());

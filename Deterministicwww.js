let last=0;
function gen(){
  const now=Date.now();
  last = now>last ? now : last+1;
  return last;
}
console.log(gen(),gen(),gen());

// diff.js
function diff(a,b){
  return b.split("").filter(c=>!a.includes(c)).join("");
}

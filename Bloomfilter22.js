const size=100, bits=new Array(size).fill(0);
const hash=x=>x.split("").reduce((a,c)=>a+c.charCodeAt(0),0)%size;

function add(x){ bits[hash(x)]=1; }
function has(x){ return bits[hash(x)]===1; }

add("node"); console.log(has("node"), has("js"));

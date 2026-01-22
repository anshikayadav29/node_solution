// async-pool.js
async function pool(n,tasks){
  const r=[];const e=[...tasks];
  const w=Array(n).fill(0).map(async()=>{while(e.length)r.push(await e.shift()())});
  await Promise.all(w);return r;
}

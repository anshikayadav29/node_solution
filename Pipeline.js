async function* source(){
  for(let i=1;i<=3;i++){ yield i; await new Promise(r=>setTimeout(r,300)); }
}
(async()=>{
  for await(const v of source())
    console.log(v*v);
})();

// jitter.js
const wait=m=>new Promise(r=>setTimeout(r,m+Math.random()*m));
async function retry(fn,n){for(let i=0;i<n;i++)try{return await fn()}catch{await wait(200)}}

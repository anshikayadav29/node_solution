// saga.js
async function saga(steps){
  const undo=[];
  try{for(const s of steps){undo.push(await s.do())}}
  catch{for(const u of undo.reverse())await u()}
}

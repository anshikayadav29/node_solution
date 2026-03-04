let fail=0,open=false;

function call(fn){
  if(open) return console.log("Circuit Open");
  try{ fn(); fail=0; }
  catch{ if(++fail>2) open=true; }
}

call(()=>{throw 1});
call(()=>{throw 1});
call(()=>{throw 1});
call(()=>console.log("OK"));

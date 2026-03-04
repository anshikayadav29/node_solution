const fs=require("fs");
function lock(){
  if(fs.existsSync("lock")) return false;
  fs.writeFileSync("lock","1"); return true;
}
function unlock(){ fs.unlinkSync("lock"); }

if(lock()){
  console.log("Locked");
  setTimeout(()=>{unlock();console.log("Unlocked")},1000);
}

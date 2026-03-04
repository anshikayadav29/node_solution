async function step(name, fail=false){
  console.log("Do",name);
  if(fail) throw name;
}
async function saga(){
  try{
    await step("Payment");
    await step("Inventory",true);
  }catch(e){
    console.log("Rollback:",e);
  }
}
saga();

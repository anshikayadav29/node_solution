function cron(expr){
  const [min]=expr.split(" ");
  return ()=>new Date().getMinutes()%Number(min)===0;
}
const job=cron("5 * * * *");
console.log("Run?",job());

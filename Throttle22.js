let ok=true;
const throttle=f=>ok&&(ok=false,f(),setTimeout(()=>ok=true,1000));

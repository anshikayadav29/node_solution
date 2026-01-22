// token-bucket.js
class Bucket{
  constructor(r=5){this.t=r;setInterval(()=>this.t=Math.min(r,this.t+1),1000)}
  take(){if(!this.t)return false;this.t--;return true}
}

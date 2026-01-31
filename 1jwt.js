const crypto = require('crypto');
function jwt(payload, secret){
  const base = Buffer.from(JSON.stringify(payload)).toString('base64');
  const sign = crypto.createHmac('sha256', secret).update(base).digest('hex');
  return base+"."+sign;
}

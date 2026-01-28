const crypto = require('crypto');

function sign(payload, secret) {
  const base = Buffer.from(JSON.stringify(payload)).toString('base64');
  const sig = crypto.createHmac('sha256', secret).update(base).digest('hex');
  return `${base}.${sig}`;
}

function verify(token, secret) {
  const [base, sig] = token.split('.');
  const check = crypto.createHmac('sha256', secret).update(base).digest('hex');
  return sig === check;
}

const token = sign({ id: 1 }, "secret");
console.log(verify(token, "secret"));

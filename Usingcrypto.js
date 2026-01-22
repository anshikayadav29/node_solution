const crypto = require('crypto');
const hash = crypto.createHash('sha256').update('NodeJS').digest('hex');
console.log('SHA256:', hash);

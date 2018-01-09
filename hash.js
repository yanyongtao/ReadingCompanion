const crypto = require('crypto');
const hash = crypto.createHash('md5');
//可任意多次调用
hash.update('hello word');
hash.update('hello node');

console.log(hash.digest('hex'));

const hmac = crypto.createHmac('sha256','secret-key');
hmac.update('hello word');
hmac.update('hello node');
console.log(hmac.digest('hex'))

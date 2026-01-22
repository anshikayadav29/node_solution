// binary-encoder.js
function encode(num) {
  const buf = Buffer.alloc(4);
  buf.writeInt32BE(num);
  return buf;
}

function decode(buf) {
  return buf.readInt32BE();
}

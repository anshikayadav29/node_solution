const fs = require('fs');

function saveChunk(chunk, index) {
  fs.appendFileSync('bigfile.txt', chunk);
  console.log(`Chunk ${index} saved`);
}

saveChunk("Hello ", 1);
saveChunk("World", 2);

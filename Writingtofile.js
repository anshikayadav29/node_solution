const fs = require('fs');
fs.writeFile('output.txt', 'Hello Node', (err) => {
  if(err) throw err;
  console.log('File written successfully');
});

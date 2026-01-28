const fs = require('fs');

fs.watch('data.txt', () => {
  fs.copyFileSync('data.txt', 'backup.txt');
  console.log("Backup Updated");
});

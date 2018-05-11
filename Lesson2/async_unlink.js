const fs = require('fs');
fs.readFile('/file.md', (err, data) => {
  if (err) throw err;
  
  console.log(data);
  
  fs.unlink('/file.md', (unlinkErr) => {
    if(unlinkErr) throw unlinkErr;
  });
});


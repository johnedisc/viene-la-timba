import fs from 'fs';

fs.readFile('./src/files/discografica.txt', 'utf-8',(err, data) => {
  if (err) throw err;
  console.log(data);
});

process.on('uncaughtException', err => {
  console.error(`tremendo lio: ${err}`);
  process.exit(1);
});

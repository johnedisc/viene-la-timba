import fs, { existsSync } from 'fs';
import path from 'path';

const folder = path.join(__dirname, 'brandNew/');

if (!fs.existsSync(folder)) {
  fs.mkdir(folder, (err) => {
    if (err) throw err;
    console.log(`directory created`);
  });
};

if (fs.existsSync(folder)) {
  fs.rmdir(folder, (err) => {
    if (err) throw err;
    console.log(`directory removed`);
  });
};

process.on('uncaughtException', err => {
  console.error(`tremendo lio. algo salio muy mal: ${err}`);
  process.exit(1);
});


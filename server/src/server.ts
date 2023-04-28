import fs from 'fs';
import path from 'path';

// use path module to make versatile path to file
// this runs async in node by default. thus file stream stuff will print last
fs.readFile(path.join(__dirname, 'files', 'queBola.txt'), 'utf-8',(err, data) => {
  if (err) throw err;
  console.log(data);
});

fs.writeFile(path.join(__dirname, 'files', 'nuevoArchivo.txt'), 'echame limon',(err) => {
  if (err) throw err;
  console.log('esta hecho el writeFile');
});

console.log('ya ves?');

process.on('uncaughtException', err => {
  console.error(`tremendo lio: ${err}`);
  process.exit(1);
});

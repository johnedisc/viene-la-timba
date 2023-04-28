import fsPromises from 'fs/promises';
import path from 'path';

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(path.join(__dirname, 'files', 'primero.txt'), 'utf-8')
    console.log(data);
    await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data);
    await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\n2');
    await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'RewritePromiseWrite.txt'));
    const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'RewritePromiseWrite.txt'), 'utf-8');
    console.log(newData);

  } catch (err) {
    console.error(`hiciste error. que pena, socio ${err}`);
  }
}

fileOps();

//// this does the same stuff sync like
//// use path module to make versatile path to file
//// node has threading by default? thus file stream stuff will print last
//fsPromises.readFile(path.join(__dirname, 'files', 'queBola.txt'), 'utf-8',(err, data) => {
//  if (err) throw err;
//  console.log(data);
//});

//fsPromises.writeFile(path.join(__dirname, 'files', 'nuevoArchivo.txt'), 'echame limon',(err) => {
//  if (err) throw err;
//  console.log('esta hecho el writeFile');
//});
//
//// creates a new file if doesnt yet exist
//fsPromises.appendFile(path.join(__dirname, 'files', 'loMasNuevoArchivo.txt'), '\n\notravez',(err) => {
//  if (err) throw err;
//  console.log('esta hecho el appendFile');
//});
//
//fsPromises.rename(path.join(__dirname, 'files', 'loMasNuevoArchivo.txt'), path.join(__dirname, 'files', 'loMasNuevoBienLlamdo.txt'), (err) => {
//  if (err) throw err;
//  console.log('esta hecho el renameFile');
//});

console.log('ya ves?');

process.on('uncaughtException', err => {
  console.error(`tremendo lio: ${err}`);
  process.exit(1);
});

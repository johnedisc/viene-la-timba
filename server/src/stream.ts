import fs from 'fs';


const readStream = fs.createReadStream('./src/files/discografica.txt', {encoding: 'utf-8'});

const writeStream = fs.createWriteStream('./src/files/copiaDeDisco2.txt');


////listen for data input
//
//readStream.on('data', (dataChunk) => {
//  writeStream.write(dataChunk);
//  console.log('se me fue la mano');
//});
//

//or pipe it 

console.log('si');
readStream.pipe(writeStream);

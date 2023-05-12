# 'viene la timba' notes

## updates
* the process of finding a suitable api is not going well, so I am switching to making up some fake data for the moment to not have to switch ideas mid-process
* still learning about node.js.
* still need to: set up database and find a way to send email notifications
* after that: sign in and jwt from server

### i want to do the following:
* get a domain name
* spin up a aws machine. [techLead](https://www.youtube.com/watch?v=1YXqXPWjmKk)
* build a simple node js server [dave gray](https://www.youtube.com/watch?v=3ZAKY-CDKog) [start with his intro to node](https://www.youtube.com/playlist?list=PL0Zuz27SZ-6PFkIxaJ6Xx_X46avTM1aYw)
* authenticate [user](https://fullstackopen.com/en/part4/token_authentication)
* set up a database on that virtual machine (mysql or [mongo](https://fullstackopen.com/en/part3/saving_data_to_mongo_db)
* hook a typescript front end up to it (react or [vanilla js](https://dev.to/vijaypushkin/dead-simple-state-management-in-vanilla-javascript-24p0)?)
* make api calls from that front end
* use vite and yarn?
* testing?
* space background? [generated with js?](https://www.siteinspire.com/websites/6430-clement-brichon)
* all of this makes me want to learn about nuts and bolts of http/tcp and build a server with a low-level language like [c](https://bruinsslot.jp/post/simple-http-webserver-in-c/)


### Set up typescript for node with simple project
(make package.json)
* npm init -y
(install typescript as dev dependency)
* yarn add -D typescript
(make tsconfig)
* npx tsc --init
(add ts-node to skip compile in dev)
* yarn add -D ts-node
(add to package.json scripts)
* "start": "ts-node fill.ts"
(add node dev server)
* yarn add -D ts-node-dev
* "start": "ts-node-dev --respawn file.ts"
(or use nodemon, another dev server)
* yard add nodemon -G
(add node types. dont forget!!!)
* yarn add -D @types/node

```typescript
import os from 'os';
import path from 'path';

console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname);
console.log(__filename);

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));


//object with root, dir, base, ext, name
console.log(path.parse(__filename));
```

This has read, write, delete (unlink), rename, and append functionality
```typescript
import fsPromises from 'fs/promises';
import path from 'path';

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(path.join(__dirname, 'files', 'primero.txt'), 'utf-8')
    console.log(data);
    await fsPromises.unlink(path.join(__dirname, 'files', 'primero.txt'))
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
```

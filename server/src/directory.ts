import fs, { existsSync } from 'fs';
import path from 'path';
import { v4 as uuid } from 'uuid';

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

let date_now = new Date();
let year = date_now.getFullYear();
let month = date_now.getMonth();
let day = date_now.getDay();
let date = date_now.getDate();
let hours = date_now.getHours();
let minutes = date_now.getMinutes();
let seconds = date_now.getSeconds();

console.log(`its ${hours}:${minutes}:${seconds} on ${month + 1}/${date}/${year}`);
console.log(uuid);

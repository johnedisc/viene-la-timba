import http, { request } from "http";
import path from "path";
import fs from "fs";
import fsPromises from "fs/promises";

import { logEvents } from "./logEvents";
import EventEmitter from "events";

class Emitter extends EventEmitter {};
// initialize object
const timbaEmitter = new Emitter();

const PORT = process.env.PORT || 3500;


const server = http.createServer((request, response) => {
  if (request.url && request.method) {
    console.log(request.url, request.method);

    const extension: string = path.extname(request.url);

    let contentType: any;

    switch (extension) {
      case '.css':
        contentType = 'text/css';
        break;
      case '.json':
        contentType = 'application/json';
        break;
      case '.jpg':
        contentType = 'text/jpeg';
        break;
      case '.png':
        contentType = 'text/png';
        break;
      case '.txt':
        contentType = 'text/plain';
        break;
      default:
        contentType = 'text/html';
    }
    
    let filePath =
      contentType === 'text/html' && request.url === '/'
        ? path.join(__dirname, 'views', `index.html`)
        : contentType === 'text/html' && request.url.slice(-1) === '/'
          ? path.join(__dirname, 'views', request.url, `index.html`)
          : contentType === 'text/html'
            ? path.join(__dirname, 'views', index.html)

  }
});

server.listen(PORT, () => console.log(`server running on port: ${PORT}`));
















// listener for log event
//timbaEmitter.on('log', (msg) => logEvents(msg));
//
//  timbaEmitter.emit('log', 'log event emitted');

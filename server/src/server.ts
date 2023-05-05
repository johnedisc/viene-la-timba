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
    case '.html':
      contentType = 'text/html';
      break;
  }
  
});

server.listen(PORT, () => console.log(`server running on port: ${PORT}`));
















// listener for log event
//timbaEmitter.on('log', (msg) => logEvents(msg));
//
//  timbaEmitter.emit('log', 'log event emitted');

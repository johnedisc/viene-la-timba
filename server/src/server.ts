import http, { ServerResponse, request } from "http";
import path from "path";
import fs from "fs";
import fsPromises from "fs/promises";

import { logEvents } from "./logEvents";
import EventEmitter from "events";

class Emitter extends EventEmitter {};
// initialize object
const timbaEmitter = new Emitter();

const PORT = process.env.PORT || 3500;

const serveFile = async (filePath: string, contentType: string, response: ServerResponse) => {
  try {
    const rawData: string = await fsPromises.readFile(filePath, 'utf-8');
    const data: string = contentType === 'application/json'
      ? JSON.parse(rawData) : rawData;
    response.writeHead(200, {'Content-Type': contentType});
    response.end(
      contentType === 'application/json' ? JSON.stringify(data) : data
    );
  } catch (error) {
    console.log(error);
    response.statusCode = 500;
    response.end();
  }
}

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

    console.log(extension);
    
    let filePath =
      contentType === 'text/html' && request.url === '/'
        ? path.join(__dirname, 'views', `index.html`)
        : contentType === 'text/html' && request.url.slice(-1) === '/'
          ? path.join(__dirname, 'views', request.url, `index.html`)
          : contentType === 'text/html'
            ? path.join(__dirname, 'views', request.url)
            : path.join(__dirname, request.url)

    // makes .html extension not required in the browser
    if (!extension && request.url.slice(-1) !== '/') filePath += '.html';

    const fileExists = fs.existsSync(filePath);

    if (fileExists) {
      //serve file
      serveFile(filePath, contentType, response);
    } else {
      // 301 redirect
      switch(path.parse(filePath).base) {
        case 'old-page.html':
          response.writeHead(301, {'Location': '/new.html'});
          response.end();
          break;
        case 'www-page.html':
          response.writeHead(301, {'Location': '/'});
          response.end();
          break;
        default:
          // serve 404
          serveFile(path.join(__dirname, 'views', '404.html'), 'text/html', response);
      }
    }

  }
});

server.listen(PORT, () => console.log(`server running on port: ${PORT}`));
















// listener for log event
//timbaEmitter.on('log', (msg) => logEvents(msg));
//
//  timbaEmitter.emit('log', 'log event emitted');

import http, { ServerResponse, request } from "http";
import path from "path";
import fs from "fs";
import fsPromises from "fs/promises";

import { logEvents } from "./logEvents";
import EventEmitter from "events";

class Emitter extends EventEmitter {};
// initialize object
const timbaEmitter = new Emitter();
//listener for log event
timbaEmitter.on('log', (msg, fileName) => logEvents(msg, fileName));
const PORT = process.env.PORT || 3500;

const serveFile = async (filePath: string, contentType: string, response: ServerResponse) => {
  try {
    const rawData: any = await fsPromises.readFile(
      filePath, 
      !contentType.includes('image') ? 'utf-8' : undefined
    );
    const data: any = contentType === 'application/json'
      ? JSON.parse(rawData) : rawData;
    response.writeHead(200, {'Content-Type': contentType});
    response.end(
      contentType === 'application/json' ? JSON.stringify(data) : data
    );
  } catch (error: any) {
    console.log(error);
    timbaEmitter.emit('log', `${error.name}\t${error.message}`, 'errorLog.txt');
    response.statusCode = 500;
    response.end();
  }
}

const server = http.createServer((request, response) => {
  if (request.url && request.method) {
    console.log(request.url, request.method);
    timbaEmitter.emit('log', `${request.url}\t\t${request.method}`, 'requestLog.txt');


    //what extension does client ask for?
    const extension: string = path.extname(request.url);

    // what is content type base on extension
    let contentType: string;

    // assign the content per extension
    switch (extension) {
      case '.css':
        contentType = 'text/css';
        break;
      case '.json':
        contentType = 'application/json';
        break;
      case '.jpg':
        contentType = 'image/jpeg';
        break;
      case '.png':
        contentType = 'image/png';
        break;
      case '.txt':
        contentType = 'text/plain';
        break;
      default:
        contentType = 'text/html';
    }

    console.log(extension);
    
    // set file path based on request. find path to that file.
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

    // boolean to see if file exists
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

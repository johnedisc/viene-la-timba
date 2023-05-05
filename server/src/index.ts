import { logEvents } from "./logEvents";
import EventEmitter from "events";

class TimbaEmitter extends EventEmitter {};


// initialize object
const timbaEmitter = new TimbaEmitter();

// listener
timbaEmitter.on('log', (msg) => logEvents(msg));

setTimeout(() => {
  // emit event
  timbaEmitter.emit('log', 'log event emitted');
}, 3000)

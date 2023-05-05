import { format } from 'date-fns';
import { v4 } from 'uuid';
import fsPromises from 'fs/promises';
import path from 'path';

export const logEvents = async (message: string): Promise<void> => {
  const dateTime: string = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
  const logItem: string = `${dateTime}\t${v4()}\t${message}`;
  console.log(logItem);
  try {
    await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventLog.txt'), logItem);
  } catch (error) {
    console.error("the append didn't work",error);
  }
}

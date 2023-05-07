import { format } from 'date-fns';
import { v4 } from 'uuid';
import fs from 'fs';
import fsPromises from 'fs/promises';
import path from 'path';

export const logEvents = async (message: string, logName: string): Promise<void> => {
  const dateTime: string = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
  const logItem: string = `${dateTime}\t${v4()}\t${message}\n`;
  console.log(logItem);
  try {
    if (!fs.existsSync(path.join(__dirname, 'logs'))) {
      await fsPromises.mkdir(path.join(__dirname, 'logs'));
    }
    await fsPromises.appendFile(path.join(__dirname, 'logs', logName), logItem);
  } catch (error) {
    console.error("the append didn't work",error);
  }
}

import { format } from 'date-fns';
import { v4 } from 'uuid';

console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'));

console.log(v4());

import fs from 'fs';
import path from 'path';

class Logger {
    log(route: string, method: string, statusCode: number) {
        const log = {
            route,
            method,
            statusCode,
            timestamp: Date.now(),
        };

        const target = path.join(__dirname, '../../logs/logs.txt');

        fs.appendFileSync(target, `${JSON.stringify(log)}\n`, 'utf8');
    }
}

export default new Logger();

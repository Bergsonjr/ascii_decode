import * as http from 'http';

import decode from './controllers/decode';
import encode from './controllers/encode';
import convertBufferToJson from './helpers/convertBufferToJson';
import Logger from './middlewares/logger';

http.createServer(async (request, response) => {
    switch (request.url) {
        case '/encode':
            if (request.method === 'POST') {
                const data = await convertBufferToJson(request);
                const { text } = data;

                if (text) {
                    const encoded = encode.exec(text);

                    response.setHeader('Content-Type', 'application/json');
                    response.statusCode = 200;
                    response.write(JSON.stringify({ encoded }));
                } else {
                    response.statusCode = 400;
                    response.write('Text property is required');
                }
            } else {
                response.statusCode = 405;
                response.write('Method not allowed');
            }

            response.end();
            break;

        case '/decode':
            if (request.method === 'POST') {
                const data = await convertBufferToJson(request);
                const { encoded } = data;

                if (encoded) {
                    const decoded = decode.exec(encoded);

                    response.setHeader('Content-Type', 'application/json');
                    response.statusCode = 200;
                    response.write(JSON.stringify({ decoded }));
                } else {
                    response.statusCode = 400;
                    response.write('Encoded property is required');
                }
            } else {
                response.statusCode = 405;
                response.write('Method not allowed');
            }

            response.end();
            break;
        default:
            response.statusCode = 404;
            response.end('Route not found');
            break;
    }

    response.on('finish', () => {
        const { url, method } = request;

        Logger.log(url as string, method as string, response.statusCode);
    });
}).listen(3000);

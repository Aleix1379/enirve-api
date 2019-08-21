import * as http from 'http';
import * as debug from 'debug';
import * as mongoose from 'mongoose';

import App from './App';

debug('ts-express:server');

const port = normalizePort(process.env.PORT || 3000);
App.set('port', port);

// support parsing of application/json type post data
// App.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
// App.use(bodyParser.urlencoded({extended: true}));

// App.use(helmet());

// App.use(cors({credentials: true, origin: true}));
// App.options('*', cors());


const server = http.createServer(App);

mongoose.connect('mongodb://localhost:27017/enirve')
    .then(() => {
        console.log('La conexión a la base de datos enirve se ha realizado correctamente');

        server.listen(port);
        server.on('error', onError);
        server.on('listening', onListening);
    })
    .catch(err => console.log(err));

mongoose.Promise = global.Promise;

function normalizePort(val: number | string): number | string | boolean {
    let port: number = (typeof val === 'string') ? parseInt(val, 10) : val;
    if (isNaN(port)) return val;
    else if (port >= 0) return port;
    else return false;
}

function onError(error: NodeJS.ErrnoException): void {
    if (error.syscall !== 'listen') throw error;
    let bind = (typeof port === 'string') ? 'Pipe ' + port : 'Port ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening(): void {
    let addr = server.address();
    let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
    debug(`Listening on ${bind}`);
    console.log(`Express server listening on port ${bind}`);
}

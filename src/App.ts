import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import UserRouter from './routes/UserRouter';
import TokenRouter from './routes/TokenController';
import * as cors from 'cors';
import requestEnsureAuth = require('./middlewares/auth');
import requestLogger = require('./middlewares/logger');

require('dotenv').config();
// import requestLogger = require('./middlewares/authenticated');
const helmet = require('helmet');

// Creates and configures an ExpressJS web server.
class App {

    // ref to Express instance
    public express: express.Application;

    //Run configuration methods on the Express instance.
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

    // Configure Express middleware.
    private middleware(): void {
        console.log('middleware...');
        this.express.use(cors(
            {
                "origin": "*",
                "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
                "preflightContinue": true,
                "optionsSuccessStatus": 204
            }
        ));
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json({limit: '50mb', type: 'application/json'}));
        this.express.use(bodyParser.urlencoded({extended: false}));
        this.express.use(helmet());
        this.express.disable('x-powered-by');
        this.express.use(requestLogger);
        this.express.use(requestEnsureAuth);
        this.express.use('/public', express.static(__dirname + '/public'));
    }

    // Configure API endpoints.
    private routes(): void {
        /* This is just to get up and running, and to make sure what we've got is
         * working so far. This function will change when we start to add more
         * API endpoints */
        // let router = express.Router();
        // placeholder route handler
        // router.get('/', (req, res, next) => {
        //     res.json({
        //         message: 'Hello World!'
        //     });
        // });
        // this.express.use('/', router);
        this.express.use('/api/v1/users', UserRouter);
        this.express.use('/api/v1/tokens', TokenRouter);
    }

}

export default new App().express;

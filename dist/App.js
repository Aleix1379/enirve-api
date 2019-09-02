"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const UserRouter_1 = require("./routes/UserRouter");
const TokenController_1 = require("./routes/TokenController");
const cors = require("cors");
const requestEnsureAuth = require("./middlewares/auth");
const requestLogger = require("./middlewares/logger");
require('dotenv').config();
// import requestLogger = require('./middlewares/authenticated');
const helmet = require('helmet');
// Creates and configures an ExpressJS web server.
class App {
    //Run configuration methods on the Express instance.
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    // Configure Express middleware.
    middleware() {
        console.log('middleware...');
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json({ limit: '50mb', type: 'application/json' }));
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(helmet());
        this.express.disable('x-powered-by');
        this.express.use(cors({ origin: 'https://www.enirve.com' }));
        this.express.use(requestLogger);
        this.express.use(requestEnsureAuth);
        this.express.use('/public', express.static(__dirname + '/public'));
    }
    // Configure API endpoints.
    routes() {
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
        this.express.use('/api/v1/users', UserRouter_1.default);
        this.express.use('/api/v1/tokens', TokenController_1.default);
    }
}
exports.default = new App().express;

//# sourceMappingURL=App.js.map

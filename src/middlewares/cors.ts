import express = require('express');

const requestCors: express.RequestHandler = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction) => {

    const whitelist = ['localhost:4200', 'enirve.com'];
    const host = req.get('origin');

    console.log(`const host = req.get('origin'); host: =>${host}<=`);

    whitelist.forEach((val) => {
        if (host.indexOf(val) > -1) {
            res.setHeader('Access-Control-Allow-Origin', host);
        }
    });

    next();
};

export = requestCors;

import * as jwt from 'jwt-simple';
import * as moment from 'moment';
import express = require('express');


const requestEnsureAuth: express.RequestHandler = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction) => {

    const secret = process.env.SECRET;

    let payload: any;
    let token: string;

    if (!req.headers.authorization) {
        if (withoutAuth()) {
            return next();
        }
        console.error('The request doesn\'t have the authentication header');
        res.status(403).send({message: 'The request doesn\'t have the authentication header'});
    } else {
        token = req.headers.authorization.split(' ')[1];
        try {
            payload = jwt.decode(token, secret);
        } catch (err) {
            console.log('try cath decode token');
            console.log(err);
            return res.status(401).send({message: 'The token has expired'});
        }
        if (payload.exp <= moment().unix()) {
            console.error('The token has expired');
            return res.status(401).send({message: 'The token has expired'});
        } else {
            req.body.userConnectedCode = payload.userConnectedCode;
            next();
        }
    }

    function withoutAuth() {
        if (req.method === 'OPTIONS') {
            return true;
        }
        if ((req.originalUrl === '/api/v1/users' || req.originalUrl === '/api/v1/tokens') && req.method === 'POST') {
            return true;
        }

        if (req.originalUrl.includes('/public/images/')) {
            return true;
        }

        return req.originalUrl.includes('/api/v1/users') && req.method === 'GET';
    }
};

export = requestEnsureAuth;

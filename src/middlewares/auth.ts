import * as jwt from 'jwt-simple';
import * as moment from 'moment';
import express = require('express');

const secret = process.env.SECRET;

const requestEnsureAuth: express.RequestHandler = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction) => {

    console.log('midleware ensureAuth');
    let payload: any;
    let token: string;

    if (withoutAuth()) {
        return next();
    }

    if (!req.headers.authorization) {
        res.status(403).send({message: 'The request doesn\'t have the authentication header'});
        next();
    } else {
        token = req.headers.authorization.split(' ')[1];
        payload = jwt.decode(token, secret);
        if (payload.exp <= moment().unix()) {
            res.status(401).send({message: 'The token has expired'});
        } else {
            req.body.user = payload.user;
            next();
        }
    }

    function withoutAuth() {
        if ((req.originalUrl === '/api/v1/users' || req.originalUrl === '/api/v1/tokens') && req.method === 'POST') {
            return true;
        }

        return req.originalUrl.includes('/api/v1/users') && req.method === 'GET';
    }
};

export = requestEnsureAuth;

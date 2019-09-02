"use strict";
const requestCors = (req, res, next) => {
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
module.exports = requestCors;

//# sourceMappingURL=cors.js.map

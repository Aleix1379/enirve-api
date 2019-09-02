"use strict";
const requestCors = (req, res, next) => {
    const whitelist = ['localhost:4200', 'https://www.enirve.com'];
    const host = req.get('origin');
    console.log(`const host = req.get('origin'); host: =>${host}<=`);
    whitelist.forEach((val) => {
        if (host.indexOf(val) >= 0) {
            return res.setHeader('Access-Control-Allow-Origin', host);
        }
    });
    next();
};
module.exports = requestCors;

//# sourceMappingURL=cors.js.map

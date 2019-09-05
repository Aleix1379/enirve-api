"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const user_1 = require("../models/user");
const bcrypt = require("bcrypt-nodejs");
const jwt = require("jwt-simple");
const moment = require("moment");
let token;
const User = mongoose.model('User', user_1.UserSchema);
class TokenController {
    createToken(req, res) {
        const secret = process.env.SECRET;
        User.findOne({ email: req.body.email }).exec()
            .then((user) => {
            if (user) {
                bcrypt.compare(req.body.password, user['password'], (err, result) => {
                    if (err) {
                        console.error(JSON.stringify(err, null, 2));
                        res.sendStatus(500);
                    }
                    else if (result) {
                        const dateExpiration = moment().add(1, 'week').unix();
                        let data = {
                            userConnectedCode: user['code'],
                            iat: moment().unix(),
                            exp: dateExpiration
                        };
                        token = jwt.encode(data, secret, 'HS256');
                        res.send({
                            userCode: user['code'],
                            exp: dateExpiration,
                            token: token
                        });
                    }
                    else if (!result) {
                        res.sendStatus(401);
                    }
                });
            }
            else if (!user) {
                res.sendStatus(401);
            }
        })
            .catch(error => {
            // console.log('error');
            console.log(JSON.stringify(error, null, 2));
            res.status(500).send(error);
        });
        // console.log(JSON.stringify(result, null , 2));
    }
}
exports.TokenController = TokenController;

//# sourceMappingURL=tokenController.js.map

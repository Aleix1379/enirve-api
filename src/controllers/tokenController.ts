import * as mongoose from 'mongoose';
import {Request, Response} from 'express';
import {UserSchema} from '../models/user';
import * as bcrypt from 'bcrypt-nodejs';
import * as jwt from 'jwt-simple';
import moment = require('moment');
import {User} from "../interfaces/User";

let token: any;
const User = mongoose.model('User', UserSchema);

export class TokenController {

    public createToken(req: Request, res: Response): void {
        const secret = process.env.SECRET;
        User.findOne({email: req.body.email}).exec()
            .then((user) => {
                if (user) {
                    bcrypt.compare(req.body.password, user['password'], (err, result) => {
                        if (err) {
                            console.error(JSON.stringify(err, null, 2));
                            res.sendStatus(500);
                        } else if (result) {
                            const dateExpiration = moment().add(1, 'week').unix();
                            let data = {
                                userCode: user['code'],
                                iat: moment().unix(),
                                exp: dateExpiration
                            };
                            token = jwt.encode(data, secret, 'HS256');
                            res.send({
                                userCode: user['code'],
                                exp: dateExpiration,
                                token: token
                            });
                        } else if (!result) {
                            res.sendStatus(401);
                        }
                    });
                } else if (!user) {
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

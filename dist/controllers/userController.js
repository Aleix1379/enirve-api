"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const fs = require("fs");
const bcrypt = require("bcrypt-nodejs");
const user_1 = require("../models/user");
const config_1 = require("../models/config");
const UserModel = mongoose.model('User', user_1.UserSchema);
const ConfigModel = mongoose.model('Config', config_1.ConfigSchema);
class UserController {
    addUser(req, res) {
        bcrypt.hash(req.body.password, null, null, function (err, hash) {
            // Store hash in your password DB.
            if (err) {
                res.status(500);
                res.send('Error hash password');
            }
            else {
                UserModel.find({}, { code: 1 })
                    .sort({ code: -1 })
                    .limit(1)
                    .then(result => {
                    let code = 1;
                    if (result.length > 0 && result[0]['code']) {
                        code = result[0]['code'] + 1;
                    }
                    let fileName;
                    const defaultImage = 'user-default.png';
                    if (req.body.picture === defaultImage) {
                        fileName = req.body.picture;
                    }
                    else {
                        fileName = `${req.body.username}.png`;
                    }
                    if (fileName !== defaultImage) {
                        fs.writeFile(`public/images/${fileName}`, req.body.picture.replace(/^data:image\/png;base64,/, ''), 'base64', (err) => {
                            if (err) {
                                console.error(err);
                            }
                        });
                    }
                    ConfigModel.create({
                        userCode: code
                    }).catch(err => {
                        res.statusCode = 500;
                        return res.send(err);
                    });
                    UserModel.create({
                        progress: {
                            points: 0,
                            activity: [
                                {
                                    sectionId: 1,
                                    verbs: [
                                        {
                                            id: 1,
                                            completed: false
                                        },
                                        {
                                            id: 2,
                                            completed: false
                                        },
                                        {
                                            id: 3,
                                            completed: false
                                        },
                                        {
                                            id: 4,
                                            completed: false
                                        },
                                        {
                                            id: 5,
                                            completed: false
                                        },
                                        {
                                            id: 6,
                                            completed: false
                                        },
                                        {
                                            id: 7,
                                            completed: false
                                        },
                                        {
                                            id: 8,
                                            completed: false
                                        },
                                        {
                                            id: 9,
                                            completed: false
                                        },
                                        {
                                            id: 10,
                                            completed: false
                                        }
                                    ]
                                },
                                {
                                    sectionId: 2,
                                    verbs: [
                                        {
                                            id: 11,
                                            completed: false
                                        },
                                        {
                                            id: 12,
                                            completed: false
                                        },
                                        {
                                            id: 13,
                                            completed: false
                                        },
                                        {
                                            id: 14,
                                            completed: false
                                        },
                                        {
                                            id: 15,
                                            completed: false
                                        },
                                        {
                                            id: 16,
                                            completed: false
                                        },
                                        {
                                            id: 17,
                                            completed: false
                                        },
                                        {
                                            id: 18,
                                            completed: false
                                        },
                                        {
                                            id: 19,
                                            completed: false
                                        },
                                        {
                                            id: 20,
                                            completed: false
                                        }
                                    ]
                                },
                                {
                                    sectionId: 3,
                                    verbs: [
                                        {
                                            id: 21,
                                            completed: false
                                        },
                                        {
                                            id: 22,
                                            completed: false
                                        },
                                        {
                                            id: 23,
                                            completed: false
                                        },
                                        {
                                            id: 24,
                                            completed: false
                                        },
                                        {
                                            id: 25,
                                            completed: false
                                        },
                                        {
                                            id: 26,
                                            completed: false
                                        },
                                        {
                                            id: 27,
                                            completed: false
                                        },
                                        {
                                            id: 28,
                                            completed: false
                                        },
                                        {
                                            id: 29,
                                            completed: false
                                        },
                                        {
                                            id: 30,
                                            completed: false
                                        }
                                    ]
                                },
                                {
                                    sectionId: 4,
                                    verbs: [
                                        {
                                            id: 31,
                                            completed: false
                                        },
                                        {
                                            id: 32,
                                            completed: false
                                        },
                                        {
                                            id: 33,
                                            completed: false
                                        },
                                        {
                                            id: 34,
                                            completed: false
                                        },
                                        {
                                            id: 35,
                                            completed: false
                                        },
                                        {
                                            id: 36,
                                            completed: false
                                        },
                                        {
                                            id: 37,
                                            completed: false
                                        },
                                        {
                                            id: 38,
                                            completed: false
                                        },
                                        {
                                            id: 39,
                                            completed: false
                                        },
                                        {
                                            id: 40,
                                            completed: false
                                        }
                                    ]
                                },
                                {
                                    sectionId: 5,
                                    verbs: [
                                        {
                                            id: 41,
                                            completed: false
                                        },
                                        {
                                            id: 42,
                                            completed: false
                                        },
                                        {
                                            id: 43,
                                            completed: false
                                        },
                                        {
                                            id: 44,
                                            completed: false
                                        },
                                        {
                                            id: 45,
                                            completed: false
                                        },
                                        {
                                            id: 46,
                                            completed: false
                                        },
                                        {
                                            id: 47,
                                            completed: false
                                        },
                                        {
                                            id: 48,
                                            completed: false
                                        },
                                        {
                                            id: 49,
                                            completed: false
                                        },
                                        {
                                            id: 50,
                                            completed: false
                                        }
                                    ]
                                },
                                {
                                    sectionId: 6,
                                    verbs: [
                                        {
                                            id: 51,
                                            completed: false
                                        },
                                        {
                                            id: 52,
                                            completed: false
                                        },
                                        {
                                            id: 53,
                                            completed: false
                                        },
                                        {
                                            id: 54,
                                            completed: false
                                        },
                                        {
                                            id: 55,
                                            completed: false
                                        },
                                        {
                                            id: 56,
                                            completed: false
                                        },
                                        {
                                            id: 57,
                                            completed: false
                                        },
                                        {
                                            id: 58,
                                            completed: false
                                        },
                                        {
                                            id: 59,
                                            completed: false
                                        },
                                        {
                                            id: 60,
                                            completed: false
                                        }
                                    ]
                                },
                                {
                                    sectionId: 7,
                                    verbs: [
                                        {
                                            id: 61,
                                            completed: false
                                        },
                                        {
                                            id: 62,
                                            completed: false
                                        },
                                        {
                                            id: 63,
                                            completed: false
                                        },
                                        {
                                            id: 64,
                                            completed: false
                                        },
                                        {
                                            id: 65,
                                            completed: false
                                        },
                                        {
                                            id: 66,
                                            completed: false
                                        },
                                        {
                                            id: 67,
                                            completed: false
                                        },
                                        {
                                            id: 68,
                                            completed: false
                                        },
                                        {
                                            id: 69,
                                            completed: false
                                        },
                                        {
                                            id: 70,
                                            completed: false
                                        }
                                    ]
                                },
                                {
                                    sectionId: 8,
                                    verbs: [
                                        {
                                            id: 71,
                                            completed: false
                                        },
                                        {
                                            id: 72,
                                            completed: false
                                        },
                                        {
                                            id: 73,
                                            completed: false
                                        },
                                        {
                                            id: 74,
                                            completed: false
                                        },
                                        {
                                            id: 75,
                                            completed: false
                                        },
                                        {
                                            id: 76,
                                            completed: false
                                        },
                                        {
                                            id: 77,
                                            completed: false
                                        },
                                        {
                                            id: 78,
                                            completed: false
                                        },
                                        {
                                            id: 79,
                                            completed: false
                                        },
                                        {
                                            id: 80,
                                            completed: false
                                        }
                                    ]
                                },
                                {
                                    sectionId: 9,
                                    verbs: [
                                        {
                                            id: 81,
                                            completed: false
                                        },
                                        {
                                            id: 82,
                                            completed: false
                                        },
                                        {
                                            id: 83,
                                            completed: false
                                        },
                                        {
                                            id: 84,
                                            completed: false
                                        },
                                        {
                                            id: 85,
                                            completed: false
                                        },
                                        {
                                            id: 86,
                                            completed: false
                                        },
                                        {
                                            id: 87,
                                            completed: false
                                        },
                                        {
                                            id: 88,
                                            completed: false
                                        },
                                        {
                                            id: 89,
                                            completed: false
                                        },
                                        {
                                            id: 90,
                                            completed: false
                                        }
                                    ]
                                },
                                {
                                    sectionId: 10,
                                    verbs: [
                                        {
                                            id: 91,
                                            completed: false
                                        },
                                        {
                                            id: 92,
                                            completed: false
                                        },
                                        {
                                            id: 93,
                                            completed: false
                                        },
                                        {
                                            id: 94,
                                            completed: false
                                        },
                                        {
                                            id: 95,
                                            completed: false
                                        },
                                        {
                                            id: 96,
                                            completed: false
                                        },
                                        {
                                            id: 97,
                                            completed: false
                                        },
                                        {
                                            id: 98,
                                            completed: false
                                        },
                                        {
                                            id: 99,
                                            completed: false
                                        },
                                        {
                                            id: 100,
                                            completed: false
                                        }
                                    ]
                                },
                                {
                                    sectionId: 11,
                                    verbs: [
                                        {
                                            id: 101,
                                            completed: false
                                        },
                                        {
                                            id: 102,
                                            completed: false
                                        },
                                        {
                                            id: 103,
                                            completed: false
                                        },
                                        {
                                            id: 104,
                                            completed: false
                                        },
                                        {
                                            id: 105,
                                            completed: false
                                        },
                                        {
                                            id: 106,
                                            completed: false
                                        },
                                        {
                                            id: 107,
                                            completed: false
                                        },
                                        {
                                            id: 108,
                                            completed: false
                                        },
                                        {
                                            id: 109,
                                            completed: false
                                        },
                                        {
                                            id: 110,
                                            completed: false
                                        }
                                    ]
                                },
                                {
                                    sectionId: 12,
                                    verbs: [
                                        {
                                            id: 111,
                                            completed: false
                                        },
                                        {
                                            id: 112,
                                            completed: false
                                        },
                                        {
                                            id: 113,
                                            completed: false
                                        },
                                        {
                                            id: 114,
                                            completed: false
                                        },
                                        {
                                            id: 115,
                                            completed: false
                                        },
                                        {
                                            id: 116,
                                            completed: false
                                        },
                                        {
                                            id: 117,
                                            completed: false
                                        },
                                        {
                                            id: 118,
                                            completed: false
                                        }
                                    ]
                                }
                            ]
                        },
                        code: code,
                        username: req.body.username,
                        email: req.body.email,
                        password: hash,
                        picture: fileName,
                    })
                        .then(result => {
                        const userCreated = Object.assign({}, result.toObject());
                        delete userCreated['password'];
                        res.json(userCreated);
                    })
                        .catch(err => {
                        res.statusCode = 500;
                        return res.send(err);
                    });
                });
            }
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const properties = ['username', 'email', 'password', 'picture'];
            const user = yield UserController.findUserByCode(req.params.id);
            properties.forEach(property => {
                const newValue = req.body[property];
                if (newValue && !!newValue) {
                    user[property] = newValue;
                }
            });
            const userCode = Number(req.params.id);
            UserModel.updateOne({ code: userCode }, user)
                .then(() => {
                res.json(user);
            })
                .catch(err => {
                // res.statusCode = 500;
                console.error(`ERROR updateUser`);
                console.error(err);
                return res.send(err);
            });
        });
    }
    findOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const key = Object.keys(req.query)[0];
            const value = req.query[key];
            const search = req.query.search;
            if (!search) {
                UserController.findUser(key, value)
                    .then(data => res.json(data))
                    .catch(error => {
                    console.error(error);
                    res.sendStatus(404);
                });
            }
            else {
                if (req.query.username === '') {
                    res.json([]);
                }
                else {
                    try {
                        const user = yield UserController.findUserByCode(req.body.userConnectedCode);
                        const string = req.query.username;
                        const regex = new RegExp(string, "i");
                        UserModel.find({ username: regex })
                            .exec((error, result) => {
                            if (error) {
                                console.error(error);
                                res.status(500).json(error);
                            }
                            else {
                                let users = result.map(user => user.toObject());
                                users = users.filter((usr) => usr.code !== user.code &&
                                    user.friends.findIndex(usrFriend => usrFriend === usr.code) === -1);
                                res.json(users);
                            }
                        });
                    }
                    catch (error) {
                        console.error(error);
                    }
                }
            }
        });
    }
    updateProgress(req, res) {
        console.log(`update progress................`);
        const points = req.body.points;
        const activity = req.body.activity;
        const userCode = req.params.id;
        UserController.findUser('code', userCode)
            .then((user) => {
            if (points) {
                user.progress.points += points;
            }
            if (activity) {
                const section = user.progress.activity.find(section => section.sectionId === activity.sectionId);
                if (section) {
                    activity.verbs.forEach(verbId => {
                        const verb = section.verbs.find(verb => verb.id === verbId);
                        if (verb) {
                            verb.completed = true;
                        }
                    });
                }
                else {
                    console.warn(`Section id: ->${activity.sectionId}<- not found...`);
                }
            }
            UserModel.updateOne({ _id: user['_id'] }, user)
                .then(() => {
                console.log(`user:`);
                console.log(user);
                console.log(`**************************`);
                res.json(user);
            })
                .catch(err => {
                res.statusCode = 403;
                return res.send(err);
            });
        }).catch(error => {
            console.error("error updating progress");
            console.error(error);
        });
    }
    findUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield UserController.findUserByCode(req.params.id);
                res.json(user);
            }
            catch (err) {
                if (err === 'User not found') {
                    res.sendStatus(404);
                }
                else {
                    res.sendStatus(500).json(err);
                }
            }
        });
    }
    findConfigByUser(req, res) {
        UserController.findConfig(req.params.id)
            .then(config => res.json(config))
            .catch(error => {
            console.error(error);
            res.status(500).json(error);
        });
    }
    updateUserConfig(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = yield UserController.findConfig(req.params.id);
            let keys = Object.keys(req.body);
            keys = keys.filter(key => key !== 'user' && key !== 'userCode');
            keys.forEach(key => {
                config[key] = req.body[key];
            });
            ConfigModel.updateOne({ userCode: Number(req.params.id) }, config)
                .exec((error, config) => {
                if (error) {
                    console.error(error);
                    res.status(500).json(error);
                }
                else {
                    res.json(config);
                }
            });
        });
    }
    getFriendsByUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield UserController.findUserByCode(req.params.id);
                UserModel
                    .find({ code: { $in: user.friends } }, { 'progress.activity': 0, 'password': 0, '__v': 0, 'validated': 0 })
                    .sort({ 'progress.points': -1 })
                    .exec((error, friends) => {
                    if (error) {
                        res.status(500).send(error);
                    }
                    else {
                        res.json(friends.map(friend => friend.toObject()));
                    }
                });
            }
            catch (err) {
                if (err === 'User not found') {
                    res.sendStatus(404);
                }
                else {
                    res.sendStatus(500).json(err);
                }
            }
        });
    }
    addFriend(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newFriendCode = req.body.userCode;
            if (!newFriendCode && isNaN(newFriendCode)) {
                return res.sendStatus(400);
            }
            let newFriend;
            try {
                newFriend = yield UserController.findUserByCode(req.body.userCode);
            }
            catch (err) {
                if (err === 'User not found') {
                    return res.status(404).send({ message: `New friend -->${req.body.userCode}<-- doesn't exists` });
                }
                else {
                    return res.sendStatus(500).json(err);
                }
            }
            try {
                const user = yield UserController.findUserByCode(req.params.id);
                if (user.code === newFriend.code) {
                    return res.status(400).send({
                        message: `New friend has to be different that the current user -->${newFriend.code}<--`
                    });
                }
                user.friends.push(newFriend.code);
                UserController.updateFriends(res, user);
            }
            catch (err) {
                if (err === 'User not found') {
                    res.sendStatus(404);
                }
                else {
                    res.sendStatus(500).json(err);
                }
            }
        });
    }
    deleteFriend(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userCodeToDelete = Number(req.params.friendId);
                if (!userCodeToDelete && isNaN(userCodeToDelete)) {
                    return res.sendStatus(400);
                }
                const user = yield UserController.findUserByCode(req.params.id);
                const oldLength = user.friends.length;
                user.friends = user.friends.filter(friend => friend !== userCodeToDelete);
                const newLength = user.friends.length;
                if (newLength === oldLength) {
                    return res.status(404).send({ message: `User with code ${userCodeToDelete} doesn't exists` });
                }
                UserController.updateFriends(res, user);
            }
            catch (err) {
                if (err === 'User not found') {
                    res.sendStatus(404);
                }
                else {
                    res.sendStatus(500).json(err);
                }
            }
        });
    }
    static updateFriends(res, user) {
        UserModel.updateOne({ code: user.code }, user)
            .exec((error) => {
            if (error) {
                console.error(error);
                res.status(500).json(error);
            }
            else {
                res.json(user);
            }
        });
    }
    static findConfig(userCode) {
        return new Promise((resolve, reject) => {
            ConfigModel.findOne({ userCode: userCode }, { __v: 0 })
                .exec((error, config) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(config);
                }
            });
        });
    }
    static findUserByCode(code) {
        return UserController.findUser('code', code);
    }
    static findUser(key, value) {
        return new Promise((resolve, reject) => {
            UserModel.findOne({ [key]: value }, { __v: 0, password: 0 })
                .exec((error, user) => {
                if (error) {
                    reject(error);
                }
                else if (!error && user) {
                    resolve(user.toObject());
                }
                else if (!error && !user) {
                    reject('User not found');
                }
            });
        });
    }
}
exports.UserController = UserController;

//# sourceMappingURL=userController.js.map

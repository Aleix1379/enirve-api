"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Mixed = mongoose.Schema.Types.Mixed;
const Schema = mongoose.Schema;
exports.UserSchema = new Schema({
    code: {
        type: Number,
        default: 1
    },
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    picture: {
        type: String
    },
    validated: {
        type: Boolean,
        default: false
    },
    friends: {
        type: [Number],
        default: []
    },
    progress: {
        points: {
            type: Number,
            default: 0
        },
        activity: {
            type: [
                Mixed
            ]
        }
    }
});

//# sourceMappingURL=user.js.map

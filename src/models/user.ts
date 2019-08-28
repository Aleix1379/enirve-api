import * as mongoose from 'mongoose';

const Mixed = mongoose.Schema.Types.Mixed;

const Schema = mongoose.Schema;

export const UserSchema = new Schema(
    {
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
    }
);

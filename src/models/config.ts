import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ConfigSchema = new Schema(
    {
        userCode: Number,
        translateLanguage: {
            type: String,
            default: null
        }
    }
);

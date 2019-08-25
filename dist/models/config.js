"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.ConfigSchema = new Schema({
    userCode: Number,
    translateLanguage: {
        type: String,
        default: null
    }
});

//# sourceMappingURL=config.js.map

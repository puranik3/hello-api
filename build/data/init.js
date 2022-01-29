"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// create models
require("../models/User");
const { DB_PORT, DB_NAME } = process.env;
mongoose_1.default.connect(`mongodb://localhost:${DB_PORT}/${DB_NAME}`)
    .then(() => {
    console.log(`Successfully connected`);
})
    .catch(err => {
    console.error(err.message);
});

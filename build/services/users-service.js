"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUsers = exports.getUsers = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const User = mongoose_1.default.model('User');
const getUsers = () => {
    // find() gets users
    return User.find();
};
exports.getUsers = getUsers;
const createUsers = (newUser) => {
    return User.create(newUser);
};
exports.createUsers = createUsers;

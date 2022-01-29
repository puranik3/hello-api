"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUsers = exports.getUsers = void 0;
const users_service_1 = require("../services/users-service");
const getUsers = (req, res, next) => {
    (0, users_service_1.getUsers)()
        .then(users => {
        res.json(users);
    })
        .catch(err => {
        res.status(500).json({
            success: false,
            message: err.message
        });
    });
};
exports.getUsers = getUsers;
const postUsers = (req, res, next) => {
    const { body: newUser } = req;
    (0, users_service_1.createUsers)(newUser)
        .then((user) => {
        res.json(user);
    })
        .catch((err) => {
        res.status(500).json({
            success: false,
            message: err.message
        });
    });
};
exports.postUsers = postUsers;

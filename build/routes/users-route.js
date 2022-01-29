"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
const express_1 = __importDefault(require("express"));
const users_controller_1 = require("../controllers/users-controller");
const router = express_1.default.Router();
exports.default = router;
router.get('/users', users_controller_1.getUsers);
router.post('/users', users_controller_1.postUsers);

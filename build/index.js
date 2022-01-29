"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
// connect to the DB (simply running the script)
require("./data/init");
// const express = require( 'express' );
const express_1 = __importDefault(require("express"));
const users_route_1 = __importDefault(require("./routes/users-route"));
const app = (0, express_1.default)();
// setup to extract body from incoming request (JSON data)
app.use(express_1.default.json());
// setup to extract body from incoming request (form data)
app.use(express_1.default.urlencoded());
app.use(users_route_1.default);
const PORT = process.env.PORT || 5555;
app.listen(PORT, () => {
    console.log(`Successfully started on http://localhost:${PORT}`);
});
app.on('error', (err) => {
    console.error(err);
});

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var config = {
  host: process.env.hostDB,
  user: process.env.userDB,
  password: process.env.passwordDB,
  database: process.env.databaseDB
};
exports.config = config;
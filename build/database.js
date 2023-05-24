"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pool = void 0;
var _promise = require("mysql2/promise");
require('dotenv').config();
var pool = (0, _promise.createPool)({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  port: process.env.PORT_DB,
  database: process.env.DB
});
exports.pool = pool;
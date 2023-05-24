"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _actas = _interopRequireDefault(require("./routes/actas.route"));
var _signIn = _interopRequireDefault(require("./routes/signIn.route"));
var _sinoidales = _interopRequireDefault(require("./routes/sinoidales.route"));
var _common = _interopRequireDefault(require("./routes/common.route"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();

//Routes

//Middlewares
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());

//Routes
app.use("/api", _actas["default"]);
app.use("/api", _sinoidales["default"]);
app.use("/api", _common["default"]);
app.use("/auth", _signIn["default"]);
var _default = app;
exports["default"] = _default;
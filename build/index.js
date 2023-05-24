"use strict";

var _app = _interopRequireDefault(require("./app"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
require('dotenv').config();
var port = process.env.PORT || 3030;
_app["default"].listen(port, function () {
  console.log("The app is listening in port: " + port);
});
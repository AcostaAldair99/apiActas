"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _auth = require("../middlewares/auth.jwt");
var actasController = _interopRequireWildcard(require("../controllers/actas.controller"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var router = (0, _express.Router)();
router.get("/certificates", _auth.verifyToken, actasController.getActas);
router.get("/certificates/acta/:id", _auth.verifyToken, actasController.getActaById);
router.post("/certificates", _auth.verifyToken, actasController.createActa);
router.put("/certificates/updateActasSignatures/:idActa/:idSinoidal", _auth.verifyToken, actasController.updateActaSignatures);
router.put("/certificates/updateActa/:idActa", _auth.verifyToken, actasController.updateActa);
router.put("/certificates/updateActa/addSignature/:idActa/:Signatures", _auth.verifyToken, actasController.addSignatureToActa);
router["delete"]("/certificates/:idActa", _auth.verifyToken, actasController.deleteActaById);
//router.get("/certificates/search/:idActa",verifyToken,actasController.searchActaById);

router.post("/certificates/addSinoidales/:idActa/:idCeremony/:idSinoidal", _auth.verifyToken, actasController.addSinoidalesActa);
router.put("/certificates/updateActaSinoidales/:idActa", _auth.verifyToken, actasController.updateSinoidalActa);
router.get("/certificates/reports", _auth.verifyToken, actasController.getActasSinoidales);
router.get("/certificates/actasSinoidales/:idActa", _auth.verifyToken, actasController.getActasSinoidalesByActa);
router.get("/certificates/actasSinoidales/sinoidales/:idSinodal", _auth.verifyToken, actasController.getActasSinoidalesBySinoidal);
router.get("/certificates/actasSinoidales/:idActa/:idSinoidal", _auth.verifyToken, actasController.getSignedFromActasSinoidales);
router["delete"]("/certificates/actasSinoidales/delete/:idActa", _auth.verifyToken, actasController.deleteActaSinoidales);
router.get("/certificates/signed/:idSinodal", _auth.verifyToken, actasController.getCountFirmasBySinoidal);
var _default = router;
exports["default"] = _default;
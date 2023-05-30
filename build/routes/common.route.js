"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _auth = require("../middlewares/auth.jwt");
var commonControllers = _interopRequireWildcard(require("../controllers/common.controllers"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var router = (0, _express.Router)();
router.get("/folders", _auth.verifyToken, commonControllers.getFolders);
router.put("/folders/:idFolder/:idCase", _auth.verifyToken, commonControllers.updateCaseFolder);
router.post("/folders", _auth.verifyToken, commonControllers.addFolder);
router["delete"]("/folders/:id_folder", _auth.verifyToken, commonControllers.deleteFolder);
router.put("/folders/addActa/:id_folder", _auth.verifyToken, commonControllers.addActaToFolder);
router.get("/folder/count/:idFolder", commonControllers.getCountActasFolder);
router.get("/folder/stand/:idFolder", commonControllers.getEstante);
router.get("/ceremonies", _auth.verifyToken, commonControllers.getCeremonies);
router.put("/ceremonies/:id_ceremony", _auth.verifyToken, commonControllers.updateCeremony);
router.post("/ceremonies", _auth.verifyToken, commonControllers.createCeremony);
router["delete"]("/ceremonies/:idCeremony", _auth.verifyToken, commonControllers.deleteCeremony);
router.get("/ceremonies/gotAsigned/:idCeremony", _auth.verifyToken, commonControllers.gotAsignActas);
router.post("/sinoidales/addEmail/:idSinoidal", _auth.verifyToken, commonControllers.addEmail);
router.post("/sinoidales/addPhone/:idSinoidal", _auth.verifyToken, commonControllers.addTelephone);
router.get("/sinoidales/phone/:id", _auth.verifyToken, commonControllers.getTelephone);
router.get("/sinoidales/emails/:idSinoidal", _auth.verifyToken, commonControllers.getEmails);
router.get("/sinoidales/email/:id", _auth.verifyToken, commonControllers.getEmail);
router.get("/sinoidales/phones/:idSinoidal", _auth.verifyToken, commonControllers.getTelephones);
router["delete"]("/sinoidales/phones/delete/:idSinoidal", _auth.verifyToken, commonControllers.deleteTelephones);
router["delete"]("/sinoidales/emails/delete/:idSinoidal", _auth.verifyToken, commonControllers.deleteEmails);
var _default = router;
exports["default"] = _default;
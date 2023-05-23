import {Router} from 'express';
const router=Router();
import { verifyToken } from '../middlewares/auth.jwt';

import * as actasController from '../controllers/actas.controller';

router.get("/certificates",verifyToken,actasController.getActas);
router.get("/certificates/acta/:id",verifyToken,actasController.getActaById);
router.post("/certificates",verifyToken,actasController.createActa);
router.put("/certificates/updateActasSignatures/:idActa/:idSinoidal",verifyToken,actasController.updateActaSignatures);
router.put("/certificates/updateActa/:idActa",verifyToken,actasController.updateActa);
router.put("/certificates/updateActa/addSignature/:idActa/:Signatures",verifyToken,actasController.addSignatureToActa);
router.delete("/certificates/:idActa",verifyToken,actasController.deleteActaById);
//router.get("/certificates/search/:idActa",verifyToken,actasController.searchActaById);


router.post("/certificates/addSinoidales/:idActa/:idCeremony/:idSinoidal",verifyToken,actasController.addSinoidalesActa);
router.put("/certificates/updateActaSinoidales/:idActa",verifyToken,actasController.updateSinoidalActa);
router.get("/certificates/reports",verifyToken,actasController.getActasSinoidales);
router.get("/certificates/actasSinoidales/:idActa",verifyToken,actasController.getActasSinoidalesByActa);
router.get("/certificates/actasSinoidales/sinoidales/:idSinodal",verifyToken,actasController.getActasSinoidalesBySinoidal);
router.get("/certificates/actasSinoidales/:idActa/:idSinoidal",verifyToken,actasController.getSignedFromActasSinoidales);
router.delete("/certificates/actasSinoidales/delete/:idActa",verifyToken,actasController.deleteActaSinoidales);
router.get("/certificates/signed/:idSinodal",verifyToken,actasController.getCountFirmasBySinoidal);
export default router;
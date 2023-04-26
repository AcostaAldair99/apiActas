import {Router} from 'express';
const router=Router();
import { verifyToken } from '../middlewares/auth.jwt';

import * as actasController from '../controllers/actas.controller';

router.get("/certificates",verifyToken,actasController.getActas);
router.post("/certificates",verifyToken,actasController.createActa);
router.put("/certificates/updateActasSignatures/:idActa",verifyToken,actasController.updateActaSignatures);
router.delete("/certificates/:idActa",verifyToken,actasController.deleteActaById);
//router.get("/certificates/search/:idActa",verifyToken,actasController.searchActaById);


router.post("/certificates/addSinoidales/:idActa/:idCeremony/:idSinoidal",verifyToken,actasController.addSinoidalesActa);
router.put("/certificates/updateSinoidales/:idActa/:idSinoidal",verifyToken,actasController.updateSinoidalActa);
router.get("/certificates/reports",verifyToken,actasController.getActasSinoidales);
router.get("/certificates/actasSinoidales/:idActa",verifyToken,actasController.getActasSinoidalesById)

export default router;
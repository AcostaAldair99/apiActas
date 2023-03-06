import {Router} from 'express';
const router=Router();
import { verifyToken } from '../middlewares/auth.jwt';

import * as actasController from '../controllers/actas.controller';

router.get("/certificates",verifyToken,actasController.getActas);
router.post("/certificates",verifyToken,actasController.createActa);
router.put("/certificates/:idActa",verifyToken,actasController.updateActa);
router.delete("/certificates/:idActa",verifyToken,actasController.deleteActaById);
router.get("/certificates/search/:idActa",verifyToken,actasController.searchActaById);

router.post("/certificates/addSinoidales/:idActa/:idCeremony/:idSinoidal",verifyToken,actasController.addSinoidalesActa);
router.get("/certificates/reports",verifyToken,actasController.getActasSinoidales);


export default router;
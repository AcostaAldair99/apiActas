import {Router} from 'express';
const router=Router();
import { verifyToken } from '../middlewares/auth.jwt';

import * as actasController from '../controllers/actas.controller';

router.get("/certificates",verifyToken,actasController.getActas);

router.post("/certificates",verifyToken,actasController.createActa);

router.put("/certificates/:idActa",actasController.updateActa);

router.delete("/certificates/:idActa",actasController.deleteActaById);

router.get("/certificates/search/:idActa",actasController.searchActaById);


export default router;
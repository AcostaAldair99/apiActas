import {Router} from 'express';
const router=Router();
import { verifyToken } from '../middlewares/auth.jwt';

import * as actasController from '../controllers/actas.controller';

router.get("/certificates",verifyToken,actasController.getActas);

router.post("/certificates",verifyToken,actasController.createActa);

router.post("/certificates/:idActa",actasController.getActas);


export default router;
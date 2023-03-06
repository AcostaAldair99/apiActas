import {Router} from 'express';
const router=Router();
import { verifyToken } from '../middlewares/auth.jwt';

import * as sinoidalesController from '../controllers/sinoidales.controller';

router.get("/sinoidales",verifyToken,sinoidalesController.getSinoidales);
router.get("/sinoidales/:id_sinoidal",verifyToken,sinoidalesController.getSinoidales);
router.put("/sinoidales/:id_sinoidal",verifyToken,sinoidalesController.updateSinoidal);
router.post("/sinoidales",verifyToken,sinoidalesController.createSinoidal);

export default router;
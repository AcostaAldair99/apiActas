import {Router} from 'express';
const router=Router();
import { verifyToken } from '../middlewares/auth.jwt';

import * as sinoidalesController from '../controllers/sinoidales.controller';

router.get("/sinoidales",verifyToken,sinoidalesController.getSinoidales);
router.put("/sinoidales/isActive/:idSinoidal",verifyToken,sinoidalesController.disActiveSinoidal);
router.put("/sinoidales/:id_sinoidal",verifyToken,sinoidalesController.updateSinoidal);
router.post("/sinoidales",verifyToken,sinoidalesController.createSinoidal);
router.get("/sinoidales/search/:idSinoidal",verifyToken,sinoidalesController.getSinoidalById);
router.delete("/sinoidales/delete/:idSinoidal",verifyToken,sinoidalesController.deleteSinoidal);
export default router;
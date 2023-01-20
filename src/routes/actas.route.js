import {Router} from 'express';
const router=Router();

import * as actasController from '../controllers/actas.controller';

router.get("/",actasController.getActas);

router.post("/",actasController.getActas);

router.post("/:idActa",actasController.getActas);


export default router;
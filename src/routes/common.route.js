import { Router } from "express";

const router=Router();
import { verifyToken } from '../middlewares/auth.jwt';
import * as commonControllers from '../controllers/common.controllers';


router.get("/folders",verifyToken,commonControllers.getFolders);

router.get("/ceremonies",verifyToken,commonControllers.getCeremonies);

router.post("/ceremonies",verifyToken,commonControllers.createCeremony);


export default router;
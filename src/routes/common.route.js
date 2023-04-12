import { Router } from "express";

const router=Router();
import { verifyToken } from '../middlewares/auth.jwt';
import * as commonControllers from '../controllers/common.controllers';


router.get("/folders",verifyToken,commonControllers.getFolders);
router.put("/folders/:id_folder",verifyToken,commonControllers.updateCaseFolder);
router.post("/folders",verifyToken,commonControllers.addFolder);
router.delete("/folders/:id_folder",verifyToken,commonControllers.deleteFolder);
router.put("/folders/addActa/:id_folder",verifyToken,commonControllers.addActaToFolder);

router.get("/ceremonies",verifyToken,commonControllers.getCeremonies);
router.put("/ceremonies/:id_ceremony",verifyToken,commonControllers.updateCeremony);
router.post("/ceremonies",verifyToken,commonControllers.createCeremony);


export default router;
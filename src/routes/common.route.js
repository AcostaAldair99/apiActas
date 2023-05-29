import { Router } from "express";

const router=Router();
import { verifyToken } from '../middlewares/auth.jwt';
import * as commonControllers from '../controllers/common.controllers';


router.get("/folders",verifyToken,commonControllers.getFolders);
router.put("/folders/:idFolder/:idCase",verifyToken,commonControllers.updateCaseFolder);
router.post("/folders",verifyToken,commonControllers.addFolder);
router.delete("/folders/:id_folder",verifyToken,commonControllers.deleteFolder);
router.put("/folders/addActa/:id_folder",verifyToken,commonControllers.addActaToFolder);
router.get("/folder/count/:idFolder",commonControllers.getCountActasFolder);
router.get("/folder/stand/:idFolder",commonControllers.getEstante);

router.get("/ceremonies",verifyToken,commonControllers.getCeremonies);
router.put("/ceremonies/:id_ceremony",verifyToken,commonControllers.updateCeremony);
router.post("/ceremonies",verifyToken,commonControllers.createCeremony);
router.delete("/ceremonies/:idCeremony",verifyToken,commonControllers.deleteCeremony);
router.get("/ceremonies/gotAsigned/:idCeremony",verifyToken,commonControllers.gotAsignActas);

router.post("/sinoidales/addEmail/:idSinoidal",verifyToken,commonControllers.addEmail);
router.post("/sinoidales/addPhone/:idSinoidal",verifyToken,commonControllers.addTelephone);
router.get("/sinoidales/phone/:id",verifyToken,commonControllers.getTelephone);
router.get("/sinoidales/emails/:idSinoidal",verifyToken,commonControllers.getEmails);
router.get("/sinoidales/email/:id",verifyToken,commonControllers.getEmail);
router.get("/sinoidales/phones/:idSinoidal",verifyToken,commonControllers.getTelephones);
router.delete("/sinoidales/phones/delete/:idSinoidal",verifyToken,commonControllers.deleteTelephones);
router.delete("/sinoidales/emails/delete/:idSinoidal",verifyToken,commonControllers.deleteEmails);


export default router;
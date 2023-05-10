import {Router} from 'express';
const router=Router();
import { verifyToken } from '../middlewares/auth.jwt';

import *  as auth from '../controllers/auth.controller';


router.post("/signIn",auth.signIn)
router.post("/signIn/validate",verifyToken,auth.isSignin);




export default router;
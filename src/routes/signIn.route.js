import {Router} from 'express';
const router=Router();

import *  as auth from '../controllers/auth.controller';

router.post("/signIn",auth.signIn)



export default router;
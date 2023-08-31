import { Router } from "express";
import * as authCtrl from '../controllers/authController';
import { checkJWT } from "../middleware/jwt";

const router = Router();

router.post('/registerUser', authCtrl.authRegister);
router.post('/auth', authCtrl.authUser);
router.get('/getUsers', [checkJWT], authCtrl.getUsers)


module.exports = router;
import { Router } from "express";
import * as formCtrl from '../emails/emailsR';

const router = Router();

router.post('/send-email', formCtrl.registro);
router.post('/send-emailA', formCtrl.registroAceptado);
router.post('/send-emailR', formCtrl.registroRechazado);
router.post('/send-emailImgA', formCtrl.registroImagA);
router.post('/send-emailImgR', formCtrl.registroImagR);


module.exports = router;
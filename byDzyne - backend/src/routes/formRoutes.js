import { Router } from "express";
import * as formCtrl from '../controllers/formController';


const router = Router();

router.post('/formulario', formCtrl.formRegister);
router.get('/getFormulario', formCtrl.getFormulario);
router.get('/getFormularioEnRevision',formCtrl.getFormulariosEnRevision);

router.get('/getFormularioEnRevisionTwo', formCtrl.getFormulariosEnRevisionTwo);
router.get('/getFormularioEnRevisionPorId/:id',formCtrl.getFormulariosEnRevisionPorId);
router.put('/formularioSubirSegundaImagen', formCtrl.subirSegundaImagen);

router.get('/getFormularioEnRevisionThree', formCtrl.getFormulariosEnRevisionThree);
router.put('/formularioFirstValidacion', formCtrl.firstValidate);
router.put('/formularioSecondValidacion', formCtrl.secondValidate);
router.put('/formularioThirdValidacion', formCtrl.thirdValidate);
module.exports = router;
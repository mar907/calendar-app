
const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { getEventos, crearEventos, actualizarEventos, eliminarEventos } = require('../controllers/events');
const { isDate } = require('../helpers/isDate');

const router = Router();

router.use(validarJWT);

router.get('/', getEventos);

router.post('/',
  [
    check('title', 'el titulo es obligatorio').not().isEmpty(),
    check('start', 'fecha de inicio es obligatoria').custom(isDate),
    check('end', 'fecha de finalizacion es obligatoria').custom(isDate),
    validarCampos
  ],
  crearEventos
);


router.put('/:id', actualizarEventos);


router.delete('/:id', eliminarEventos);



module.exports = router;

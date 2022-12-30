/*
RUTA: /api/mazos
*/

const { Router } = require('express');
// const { check } = require('express-validator');
// const { validarCampos } = require('../middlewares/validar-campos')
// const { validarJWT } = require('../middlewares/validar-jwt');

const { getMazos, crearMazo, actualizarMazo, borrarMazo } = require('../controllers/mazos')

const router = Router();

router.get('/', getMazos);

router.post('/', crearMazo);

router.put('/:id', actualizarMazo);

router.delete('/:id', borrarMazo);

module.exports = router;
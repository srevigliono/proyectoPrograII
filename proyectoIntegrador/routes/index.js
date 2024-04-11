var express = require('express');
var router = express.Router();
const product = require('../controllers/controladores');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/register', product.mostrarFormularioRegister);

router.get('/login', product.mostrarFormularioLogin);

router.get('/editar-perfil', product.mostrarFormularioEditarPerfil);

router.get('/agregar-producto', product.mostrarFormularioAgregarProducto);





module.exports = router;


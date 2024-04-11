var express = require('express');
var router = express.Router();
const controller = require("../controllers/indexController")

router.get("/",)
router.get("/resultadosbusqueda",)

router.get('/register', product.mostrarFormularioRegister);

router.get('/login', product.mostrarFormularioLogin);

router.get('/editar-perfil', product.mostrarFormularioEditarPerfil);

router.get('/agregar-producto', product.mostrarFormularioAgregarProducto);





module.exports = router;


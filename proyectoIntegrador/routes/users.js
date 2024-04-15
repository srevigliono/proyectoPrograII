var express = require('express');
var router = express.Router();
const usersController = require("../controllers/usersControllers");

router.get("/login", usersController.login);
router.get("/registrate",usersController.regis );
router.get("/perfil",usersController.perf);
router.get("/editarPerfil",usersController.editPerf);

module.exports = router;
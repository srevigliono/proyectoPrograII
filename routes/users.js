var express = require('express');
var router = express.Router();
const usersController = require("../controllers/usersControllers");

router.get("/login", usersController.login);

router.get("/registrate",usersController.register );
router.post("/registrate",usersController.store );

router.get("/perfil",usersController.perfil);
router.get("/profile-edit",usersController.editarPerfil);

module.exports = router;
var express = require('express');
var router = express.Router();
const usersController = require("../controllers/usersControllers");
const loginValidations = require('../middlewares/login-validator');
const registerValidation = require('../middlewares/register-validator');

router.get("/login", usersController.login);
router.post('/login', loginValidations, usersController.logstore);

router.get("/registrate",usersController.register );
router.post("/registrate", registerValidation, usersController.store );

router.get("/perfil/:id",usersController.perfil);

router.get("/profile-edit/:id",usersController.editarPerfil);
router.post("/perfil/:id", registerValidation , usersController.editarPerfilStore);

router.post('/logout', usersController.logout);

module.exports = router;
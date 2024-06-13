var express = require('express');
var router = express.Router();
const usersController = require("../controllers/usersControllers");
const loginValidations = require('../middlewares/login-validator');
const registerValidation = require('../middlewares/register-validator');

router.get("/login", usersController.login);
router.post('/', loginValidations, usersController.login);


router.get("/registrate",usersController.register );
router.post("/registrate", registerValidation, usersController.store );

router.get("/perfil",usersController.perfil);
router.get("/profile-edit",usersController.editarPerfil);

router.post('/logout', usersController.logout);

module.exports = router;
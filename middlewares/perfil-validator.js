const { body } = require('express-validator')
const db = require('../database/models');
const bcrypt = require('bcryptjs');

const perfilValidation = [
    body('email')
        .notEmpty()
        .withMessage('Comlpetar el campo de Mail')
        .bail()
        .isEmail()
        .withMessage('Debes escribir un formato de correo valido')
        .custom(function (value, { req }) {
            return db.User.findOne({
                where: { email: value }
            })
                .then(function (userToLogin) {
                    if (userToLogin) {
                        throw new Error("El mail ya está en uso")
                    }
                })
        }),


    body('usuario')
        .withMessage('Comlpetar el campo de usuario'),

    body('contraseña')
        .withMessage('Comlpetar el campo de Contraseña')
        .isLength({ min: 5 }),

    body('fecha')
        .isDate()
        .withMessage("Ingresar una fecha"),

    body('documento')
        .withMessage("Debe ser un documento válido"),
        

]

module.exports = perfilValidation;


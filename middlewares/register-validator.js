const { body } = require('express-validator')
const db = require('../database/models');
const bcrypt = require('bcryptjs');

const registerValidation = [
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
                        throw new Error("El usuario ya esta registrado")
                    }
                })
        }),

    body('usuario')
        .notEmpty()
        .withMessage('Comlpetar el campo de usuario'),

    body('password')
        .notEmpty()
        .withMessage('Comlpetar el campo de Contraseña')
        .isLength({ min: 5 }),

    body('fecha')
        .optional(),

    body('dni')
        .optional(),
        

    body('foto')
        .optional()

]

module.exports = registerValidation;
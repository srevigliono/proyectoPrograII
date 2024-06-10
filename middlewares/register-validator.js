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
            console.log('value: ', value);
            return db.User.findOne({
                where: { email: value }
            })
                .then(function (userToLogin) {
                    if (userToLogin) {
                        throw new Error("El usuario ya esta registrado")
                    }
                })
        }),

    body('password')
        .notEmpty()
        .withMessage('Comlpetar el campo de Contraseña')
        .isLength({ min: 5 }),

    body('fecha')
        .notEmpty()
        .withMessage('Comlpetar el campo con fecha de nacimiento'),

    body('dni')
        .notEmpty()
        .withMessage('Comlpetar el campo con dni')
        .isLength({ min: 5 }),

    body('foto')
        .withMessage('Comlpetar el campo con foto de perfil'),

]

module.exports = registerValidation;
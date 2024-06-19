const { body } = require('express-validator');
const db = require('../database/models');
const bcrypt = require('bcryptjs');

const loginValidations = [
    body('email')
        .notEmpty()
        .withMessage('Comlpetar con tu mail').bail()
        .isEmail()
        .withMessage('Debes escribir un formato de correo valido')
        .custom(function (value, { req }) {

            return db.User.findOne({
                where: { email: value }
            })
            .then(function (userToLogin) {
                    if (!userToLogin) {
                        throw new Error('El email no está registrado');
                    }
                })
        }),
    body('password')
        .notEmpty()
        .withMessage('Comlpetar el campo')
        .custom(function (value, { req }) {
            return db.User.findOne({
                where: { email: req.body.email }
            })
            .then(function (user) {
                if (user) {
                    const passwordOk = bcrypt.compareSync(value, user.password);
                    if (!passwordOk) {
                        throw new Error('El email o la contraseña son incorrectas');
                    }
                }
            });
        })
]

module.exports = loginValidations;
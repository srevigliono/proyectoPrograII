const { body } = require('express-validator')
const db = require('../database/models');
const bcrypt = require('bcryptjs');

const loginValidations = [
    body('email')
        .notEmpty()
        .withMessage('Comlpetar el mail')
        .isEmail()
        .withMessage('Debes escribir un formato de correo valido')
        .custom(function (value, { req }) {

            return db.User.findOne({
                where: { email: value }
            }).then(function (userToLogin) {
                    if (!userToLogin) {
                        return Promise.reject('El usuario no está registrado');
                    }
                })
        }),
    body('password')
        .notEmpty()
        .withMessage('Comlpetar el campo')
        .custom(function (value, { req }) {
            console.log('value: ', value);
            return db.User.findOne({
                where: { email: req.body.email }
            })
                .then(function (user) {
                    if (user) {
                        const password = user.password
                        const passwordOk = bcrypt.compareSync(value, user.password)
                        if (!passwordOk) {
                            return Promise.reject('La contraseña es incorrecta');
                        }
                    }
                })
        })
]

module.exports = loginValidations;
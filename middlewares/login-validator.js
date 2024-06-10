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
            console.log('value: ', value);
            return db.User.findOne({
                where: { email: value }
            })
                .then(function (userToLogin) {
                    if (!userToLogin) {
                        throw new Error("El usuario no esta registrado")
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
                        const passwordOk = bcrypt.compareSync(value, password)
                        if (!passwordOk) {
                            throw new Error("La contraseña es incorreta perro")
                        }
                    }
                })
        })
]

module.exports = loginValidations;
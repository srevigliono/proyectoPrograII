const { body } = require('express-validator');
const db = require('../database/models');
const bcrypt = require('bcryptjs');

const commentValidations = [
    body("añadircomentario")
        .notEmpty()
        .withMessage('Escribe tu comentario').bail()
]

module.exports = commentValidations;
const { body } = require('express-validator');
const db = require('../database/models');
const bcrypt = require('bcryptjs');

const commentValidations = [
    body("añadircomentario")
        .notEmpty()
        .withMessage('Escribe tu comentario').bail()
        .isLength({ max: 30 }).withMessage("No más de 30 caractéres")


]

module.exports = commentValidations;
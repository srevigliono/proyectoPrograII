const { body } = require('express-validator')
const db = require('../database/models');

const productValidation = [
    body('imagen')
        .notEmpty()
        .withMessage('Comlpetar el campo con la imagen del producto'),

    body('nombre')
        .notEmpty()
        .withMessage('Comlpetar el campo con el nombre del producto'),

    body('descripcion')
        .notEmpty()
        .withMessage('Comlpetar el campo con la descripcción del producto')
        .isLength({ min: 5 }),



] 

module.exports = productValidation;
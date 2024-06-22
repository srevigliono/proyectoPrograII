var express = require('express');
var router = express.Router();
const productController = require("../controllers/productController");

 const productValidation = require('../middlewares/product-validator');

router.get("/detail/:id", productController.producto);
router.get('/delete/:id', productController.destroy);

router.get("/add",productController.create);
router.post("/add",productValidation,productController.createStore);

module.exports = router;


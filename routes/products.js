var express = require('express');
var router = express.Router();
const productController = require("../controllers/productController");
const commentValidation = require("../middlewares/comment-validator")

 const productValidation = require('../middlewares/product-validator');

router.get("/detail/:id", productController.producto);
router.post("/detail/:id", productController.comentar)

router.get('/delete/:id', productController.destroy);

router.get("/add",productController.create);
router.post("/add",productValidation,productController.createStore);


module.exports = router;


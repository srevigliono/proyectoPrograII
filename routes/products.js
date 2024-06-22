var express = require('express');
var router = express.Router();
const productController = require("../controllers/productController");

router.get("/detail/:id", productController.producto);
router.get('/delete/:id', productController.destroy);


module.exports = router;


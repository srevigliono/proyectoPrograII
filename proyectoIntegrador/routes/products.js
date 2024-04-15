var express = require('express');
var router = express.Router();
const productController = require("../controllers/productController");

router.get("/detail", productController.producto);
router.get("/add",productController.crear);

module.exports = router;


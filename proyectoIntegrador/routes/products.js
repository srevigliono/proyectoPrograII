var express = require('express');
var router = express.Router();
const productController = require("../controllers/productControllers")

router.get("/", productController.index);
router.get("/:idproducto",productController.product);




module.exports = router;




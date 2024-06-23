var express = require('express');
var router = express.Router();
const productController = require("../controllers/productController");
const commentValidation = require("../middlewares/comment-validator")

router.get("/detail/:id", productController.producto);
router.post("/detail/:id", productController.comentar)

router.get('/delete/:id', productController.destroy);



module.exports = router;


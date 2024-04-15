const data = require("../db/dataBase");

const productController = {
    producto:
        function (req ,res) {
        res.render("product", {title: "Detalles del producto", productos: data})
        }
    ,
    crear:
        function (req ,res) {
        res.render("product-add", {title: "Agregar productos"})
        }
    
}

module.exports = productController;
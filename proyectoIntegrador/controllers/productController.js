const data = require("../db/dataBase");

const productController = {
    producto:
        function (req ,res) {
            const productos = data.productos
            console.log(productos);
        res.render("product", {title: "Detalles del producto", productos})
        }
    ,
    crear:
        function (req ,res) {
        res.render("product-add", {title: "Agregar productos"})
        }
    
}

module.exports = productController;
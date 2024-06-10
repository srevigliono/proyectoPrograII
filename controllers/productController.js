const data = require("../database/models");

const productController = {
    producto:
        function (req ,res) {
            const productos = data.productos
        res.render("product", {title: "Detalles del producto", productos})
        }
    ,
    crear:
        function (req ,res) {
            const usuarios = data.usuarios
        res.render("product-add", {title: "Agregar productos", usuarios})
        }
    
}

module.exports = productController;
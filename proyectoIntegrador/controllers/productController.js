const data = require("../db/dataBase");

const controller = {
    producto:{
        function (req ,res) {
            res.render("producto", {title: "Detalles del producto", productos: data})
        }
    },
    
    crear:{
        function (req ,res) {
            res.render("agregar producto", {title: "Agregar productos"})
        }
    }
}

module.exports = controller;
const { validationResult } = require('express-validator');
const db = require("../database/models");


const productController = {
    producto:
        function (req ,res) {
        res.render("product", {title: "Detalles del producto", productos})
        const id = req.params.id;
        const associations = {
            include: [{associations: "usuario"},{associations: "comments"}]
        }
        const falso = false;
        
        db.Product.findByPk(id, criterio)
        .then(function (results) {
            if (req.session.user != undefined && req.session.user.id == results.usuario.id) {
                falso = true
            }else{
                return res.render("product", {title:"Productos", products: results, comment: results.comentaris, condition: condition});
            }
        }).catch(function (err) {
            console.log(err);
        });
        },

    crear:
        function (req ,res) {
            if (req.session.user != undefined) {
                return res.render("product-add", {title: "Agregar productos", usuarios})
            }else{
                return res.redirect("/user/login");
            }
        },

    
    
}

module.exports = productController;
const { validationResult } = require('express-validator');
const db = require("../database/models");


const productController = {
    producto:
        function (req ,res) {
        const id = req.params.id;

        const condition = true;
        
        db.Product.findByPk(id, {include: [{association: "usuario"}, {association: "comentarios", include: [{association: "usuario"}]}]
        })
        
        .then(function (results) {
            //if (req.session.user == undefined && req.session.user.id != results.usuario.id) {
              //  condition = false;
            //}  COMO NO ANDA EL LOGIN, SIEMPRE VA A DAR FALSE (TIRAR EL ERROR)
            return res.render("product", {title:"Productos", products: results, condition: condition});
            
        }).catch(function (err) {
            console.log(err);
        });
    },
    
    destroy:
        function (req ,res) {
            db.Product.destroy({where: {id: req.params.id}})
            
            .then(function (){
                return res.redirect('/')
            })
        },
    
    comentar: function (req ,res) {
        const validationErrors = validationResult(req);
        const agregar = req.body;
        console.log('validationErrors : ', validationErrors);
        if (validationErrors.isEmpty()) {
            const nuevocom = {
                usuario_id: req.session.user.id,
                product_id: req.params.id,
                comentario: form.comentario,
            };

            db.Commentt.create(nuevocom)
            .then(function (resultado) {
                {return res.redirect("/detail/id")}
            }).catch(function (error) {
                return console.log(error);
            });
            
        } else {
            const id = req.params.id;
            const cond = false;
            db.Product.findByPk(id, {include: [{association: "usuario"}, {association: "comentarios", include: [{association: "usuario"}], order: [["created_at", "DESC"]]}]
            })
            .then(function (res) {
                if (req.session.user != undefined && req.session.user.id == results.usuario.id) {
                    cond = true;
                } return res.render("productos", {title: "Producto", productos: results, comentarios: results.comentarios, errors: errors.mapped()});        
            })
            .catch(function (error) {
                return console.log(error);
            })
        }
    }
}

module.exports = productController;
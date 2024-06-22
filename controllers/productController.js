const { validationResult } = require('express-validator');
const db = require("../database/models");


const productController = {
    producto:
        function (req, res) {
            const id = req.params.id;

            const condition = true;

            db.Product.findByPk(id, {
                include: [{ association: "usuario" }, {
                    association: "comentarios", include: [{ association: "usuario" }]
                }]
            })

                .then(function (results) {
                    //if (req.session.user == undefined && req.session.user.id != results.usuario.id) {
                    //  condition = false;
                    //}  COMO NO ANDA EL LOGIN, SIEMPRE VA A DAR FALSE (TIRAR EL ERROR)
                    return res.render("product", { title: "Productos", products: results, condition: condition });

                }).catch(function (err) {
                    console.log(err);
                });
        },

    destroy:
        function (req, res) {
            db.Product.destroy({ where: { id: req.params.id } })

                .then(function () {
                    return res.redirect('/')
                })
        },

    create:
        function (req, res, next) {
            return res.render("product-add")
        },

    createStore:
        function (req, res) {
            const validationErrors = validationResult(req);
            console.log('validationErrors : ', validationErrors);
            if (validationErrors.isEmpty()) {
                const productoCreado = {
                    imagen: req.body.imagen,
                    nombre: req.body.nombre,
                    descripcion: req.body.descripcion,
                    
                };


                db.Product.create(productoCreado)
                    .then(function (creado) {
                        return res.redirect("/");
                    })
                    .catch(function (err) {
                        console.log("Error al grabar el producto", err);
                    })
            }
            else {
                return res.render('product-add',
                    {
                        title: "product",
                        errors: validationErrors.mapped(),
                        oldData: req.body
                    });
            }
        },
}
        
     

module.exports = productController;




const { validationResult } = require('express-validator');
const db = require("../database/models");
const bcrypt = require('bcryptjs');


const usersController = {

    register: function (req, res, next) {
        return res.render("register", { title: "Regístrate" });
    },

    store: function (req, res) {
        const validationErrors = validationResult(req);
        console.log('validationErrors : ', validationErrors);

        if (validationErrors.isEmpty()) {
            const usuarioCreado = {
                
                email: req.body.email,
                user: req.body.usuario,
                password: bcrypt.hashSync(req.body.password, 10),
                dni: req.body.dni,
                foto: req.body.foto,
                fecha: req.body.fecha
            };


            db.User.create(usuarioCreado)
                .then(function (creado) {
                    return res.redirect("/users/login");
                })
                .catch(function (err) {
                    console.log("Error al grabar el usuario", err);
                    return res.render("register")
                })
        }
        else {
            return res.render('register',
                {
                    title: "Register",
                    errors: validationErrors.mapped(),
                    oldData: req.body
                });
        }
    },

    login: function (req, res) {
        return res.render("login");
    },

    logstore: function (req, res) {

        const validationErrors = validationResult(req);

        if (!validationErrors.isEmpty()) {
            return res.render('login', {
                errors: validationErrors.mapped(),
                oldData: req.body
            })
        };

        db.User.findOne({
            where: [{ email: req.body.email }]
        })
            .then(user => {
                encryptedpPassword = user.password;
                const check = bcrypt.compareSync(req.body.password, encryptedpPassword)

                if (check) {
                    req.session.user = user;
                    if (req.body.rememberme != undefined) {
                        res.cookie('usuario_id', user.id, { maxAge: 1000 * 60 * 100 })
                    }
                    return res.redirect('/');
                }
            })
            .catch(error => {
                console.log(error);
                return res.render('login', {
                    errors: [{ msg: 'Error al iniciar sesión' }],
                    oldData: req.body
                });
            });
    },

    logout: function (req, res) {
        req.session.destroy();
        res.clearCookie('usuario_id');
        return res.redirect('/')
    },

    perfil: function (req, res, next) {
        const id = req.params.id;

        db.User.findByPk(id, {
            include: [{association: "products"}, {association: "comments"}],
        })
            .then(function (results) {
                const condition = false;
                return res.render('profile', {title: 'Perfil', user: results, products: results.products, comentarios: results.comments, userlogueado: req.session.user})
            })
            .catch(function (error) {
                console.log(error);
            });

    },

    editarPerfil:
        function (req, res) {
            const id = req.params.id;

            db.User.findByPk(id).then(function (user) {
                res.render("profile-edit", {
                    users: user
                });
            });


        },
    
    editarPerfilStore:
        function(req,res){
            
            const id = req.params.id; // declaro el id
       
                db.User.update({
                    email: req.body.email,
                    user: req.body.usuario,
                    password: req.body.contraseña,
                    fecha: req.body.fecha,
                    dni: req.body.documento,
                    foto: req.body.foto

                },{
                    where: {id: id}
                }).then(function (users) {
                    return res.redirect(`/users/perfil/${id}`);
                }).catch(function (error) {
                    console.log(error);
                });
            

        }

};

module.exports = usersController;
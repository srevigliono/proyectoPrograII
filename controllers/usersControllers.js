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
                name: req.body.name,
                email: req.body.email,
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
                console.log("DATA USUARIO POR ID: ", JSON.stringify(results, null, 4));
                const condition = false;
                return res.render('profile', {title: 'Perfil', user: results, products: results.products, comentarios: results.comments})
            })
            .catch(function (error) {
                console.log(error);
            });

    },

    editarPerfil:
        function (req, res, next) {
            const usuarios = oldData.usuarios
            res.render("profile-edit", { title: "Editar perfil", usuarios })
        },

};

module.exports = usersController;
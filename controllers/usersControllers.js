const { validationResult } = require('express-validator');
const db = require("../database/models");
const bcrypt = require('bcryptjs');


const usersController = {

    login: function (req, res) {

        const validationErrors = validationResult(req);

        if (!validationErrors.isEmpty()) {
            return res.render('login', {
                errors: validationErrors.array(),
                oldData: req.body
            })
        }

        if (!req.body.email) {
            return res.render('login', {
                errors: { email: { msg: 'El campo de email es requerido' } },
                oldData: req.body
            });
        }



        // Buscamos el usuario que se quiere loguear.
        db.User.findOne({
            where: [{ email: req.body.email }]
        }) .then(user => {
            if (!user || !bcrypt.compareSync(req.body.password, user.password)) {
                return res.render('login', {
                    errors: [{ msg: 'Usuario y/o contraseña incorrectos' }],
                    oldData: req.body
                });
            }

            req.session.user = {
                id: user.id,
                name: user.name,
                email: user.email
            };

            res.redirect('/');
        })
        .catch(error => {
            console.log(error);
            return res.render('login', {
                errors: [{ msg: 'Error al iniciar sesión' }],
                oldData: req.body
            });
        });
    },

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
                .then(function (usuarioCreado) {
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

    logout: function (req, res) {
        req.session.destroy();
        res.clearCookie('userId');
        return res.redirect('/')
    },

    perfil:
        function (req, res, next) {
            const usuarios = data.usuarios
            res.render("profile", { title: "Perfil", usuarios })
        },

    editarPerfil:
        function (req, res, next) {
            const usuarios = data.usuarios
            res.render("profile-edit", { title: "Editar perfil", usuarios })
        },

};

module.exports = usersController;
const db = require("../database/models");
const op = db.Sequelize.Op;
const users = db.User;
const bcrypt = require('bcryptjs');

const usersController = {

    login:
        function (req, res, next) {
            res.render("login", { title: "Login" })
        },

    register:
        function (req, res, next) {
            return res.render("register", { title: "Regístrate" })
        },

    store: function (req, res) {
        const user = {
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10)
        };

        users
            .create(user)
            .then(function (user) {
                return res.redirect("/login");
            })
            .catch(function (err) {
                console.log("Error al grabar el usuario", err);
            });

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
const data = require("../database/models");

const usersController = {

    login:
        function (req, res, next) {
            res.render("login", {title: "Login"})
        },

    register:
        function (req, res, next) {
            res.render("register", {title: "Regístrate"})
        },

    perfil:
        function (req, res, next) {
            const usuarios = data.usuarios
            res.render("profile", {title: "Perfil", usuarios})
        },

    editarPerfil:
        function (req, res, next) {
            const usuarios = data.usuarios
            res.render("profile-edit", {title: "Editar perfil", usuarios})
        },

};

module.exports = usersController;
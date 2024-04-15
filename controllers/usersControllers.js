const data = require("../db/dataBase");

const usersController = {

    login:
        function (req, res, next) {
            res.render("login", {title: "Login"})
        },

    regis:
        function (req, res, next) {
            res.render("register", {title: "Regístrate"})
        },

    perf:
        function (req, res, next) {
            res.render("profile", {title: "Perfil"})
        },

    editPerf:
        function (req, res, next) {
            res.render("profile-edit", {title: "Editar perfil"})
        }
};

module.exports = usersController;
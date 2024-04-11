const data = require("../db/dataBase");

const controller = {

    login:{
        function (req, res, next) {
            res.render("login",{title: "Login"})
        }
    },

    regis:{
        function (req, res, next) {
            res.render("registrate",{title: "Regístrate"})
        }
    },

    perf:{
        function (req, res, next) {
            res.render("perfil",{title: "Perfil"})
        }
    },

    editPerf:{
        function (req, res, next) {
            res.render("editar perfil",{title: "Editar perfil"})
        }
    }

};

module.exports = controller;
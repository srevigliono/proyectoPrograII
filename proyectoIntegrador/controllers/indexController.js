const data = require("../db/dataBase");

const controller = {
    inicio:{
        function (req, res) {
            res.render("inicio", {title: "Inicio", productos: data})
        }
    },
    bus:{
        function (req, res) {
            res.render("res_busqueda", {title: "Resultados de búsqueda"})
        }
    }
}

module.exports = controller;
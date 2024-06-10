const data = require("../database/models");

const indexController = {
    inicio:
        function (req, res) {
        res.render("index", {title: "Inicio", productos: data.productos })
        }
    ,
    bus:
        function (req, res) {
        res.render("search-results", {title: "Resultados de búsqueda"})
        }
    
}

module.exports = indexController;
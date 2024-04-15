const data = require("../db/dataBase");

const indexController = {
    inicio:
        function (req, res) {
        res.render("index", {title: "Inicio", productos: data })
        }
    ,
    bus:
        function (req, res) {
        res.render("search-results", {title: "Resultados de búsqueda"})
        }
    
}

module.exports = indexController;
const products = require("../db/dataBase.js");

const controller = {
    index: function (req, res) {
    return res.render("register", {title:"Registrar",registrar: register})
    },
   
    product: function (req, res) {
    }
   

}


module.exports = controller;
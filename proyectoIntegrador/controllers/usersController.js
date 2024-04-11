const users = require("../db/dataBase.js");

const controller = {
    register: function (req, res) {
    return res.render("register", {title:"Registrar",registrar: register})
    }
}

module.exports = controller;





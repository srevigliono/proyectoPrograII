const data = require("../db/dataBase");

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
            const productosUsuario = []
            for (let i = 0; i < array.length; i++) {
                const total = ""
                if (data.usuarios.id === data.productos[i].userid)
                productosUsuario.push(data.productos[i].userid)
                else
                    continue    
            }
        
            
            res.render("profile", {title: "Perfil", usuarios})
        },

    editarPerfil:
        function (req, res, next) {
            res.render("profile-edit", {title: "Editar perfil"})
        }
    
    
    
};

module.exports = usersController;
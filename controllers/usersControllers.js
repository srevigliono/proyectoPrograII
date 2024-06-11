const { where } = require("sequelize");
const { validationResult } = require('express-validator');
const db = require("../database/models");
const op = db.Sequelize.Op;
const users = db.User;
const bcrypt = require('bcryptjs');

const usersController = {

    login: function(req, res){
        //obtenemos los restultados de las validaciones 
        const validationErrors = validationResult(req);
        console.log('validationErrors : ', validationErrors)      
        
        if(validationErrors.errors.length > 0){
            return res.render('login', {
                errors: validationErrors.mapped(),
                oldData:req.body
            })
        }
        //CHEQUEAR ESTO
        //CHEQUEAR ESTO
        //CHEQUEAR ESTO
        //CHEQUEAR ESTO

        if (!req.body.email) {
            return res.render('login', {
                errors: { email: { msg: 'El campo de email es requerido' } },
                oldData: req.body
            });
        }

        //CHEQUEAR ESTO
        //CHEQUEAR ESTO
        //CHEQUEAR ESTO
        //CHEQUEAR ESTO


        // Buscamos el usuario que se quiere loguear.
        db.User.findOne({
            where: [{email: req.body.email}]
        })
        .then( function ( user ) {
            //Seteamos la session con la info del usuario
            req.session.user = user;          
            //Si tildó recordame => creamos la cookie.
            if(req.body.rememberme != undefined){
                res.cookie('userId', user.id, { maxAge: 1000 * 60 * 100})
            }
            return res.redirect('/');            
        })
        .catch( function(e) {
            console.log(e)
        })
    },

    register:
        function (req, res, next) {
            return res.render("register", { title: "Regístrate" })
        },

    store: function (req, res) {
        const validationErrors = validationResult(req);
        console.log('validationErrors : ', validationErrors)
        if (validationErrors.errors.length > 0) {
            return res.render('register', {
                errors: validationErrors.mapped(),
                oldData: req.body
            })
        }

        /* const user = {
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10)
        };
 */
        db.User.create({
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            dni: req.body.dni,
            foto: req.body.foto,
            fecha: req.body.fecha
        })
            .create(user)
            .then(function (user) {
                return res.redirect("/login");
            })
            .catch(function (err) {
                console.log("Error al grabar el usuario", err);
            });

    },

    logout: function(req,res){
        req.session.destroy();
         res.clearCookie('userId');
        return res.redirect('/')
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
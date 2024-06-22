const data = require("../database/models");
const op = data.Sequelize.Op;

const indexController = {
    inicio: function (req, res) {
        data.Product.findAll({
            include: [{association: "usuario"}, 
            {association: "comentarios"}],
            order: [["created_at", "DESC"]]
        })
        
        .then(productos => {
            res.render("index", { title: "Inicio", productos });
        })
        
        .catch(error => {
            console.error(error);
        });
        },

    bus: function (req, res) {
        
        const buscar = req.query.search;
        
        const filtro = {
            where: {
                [op.or]: [
                    { nombre: { [op.like]: '%' + `${buscar}` + '%' }}, 
                    { descripcion: { [op.like]: '%' + `${buscar}` + '%' }}
                ]
        }};

        data.Product.findAll(filtro)
        
        .then(results => {
            return res.render('resultado', {titulo: `Resultados para tu búsqueda: ${buscar}`, productos: results});
        })
        
        .catch(error => {
            console.log(error);
        });
    }   
}

module.exports = indexController;
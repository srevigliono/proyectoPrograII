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

        if (!buscar) {
            console.log('No hay query');
            return res.render('search-results', { productos: [], Query: '' });
        }
        
        const filtro = {
            where: {
                [op.or]: [
                    { nombre: { [op.like]: '%' + `${buscar}` + '%' }}, 
                    { descripcion: { [op.like]: '%' + `${buscar}` + '%' }}
                ]
            },
            order: [['created_at', 'DESC']],
                include: [
                    {association: "usuario"}, 
                    {association: "comentarios"}
                ],
            };

        data.Product.findAll(filtro)
        
        .then(results => {
            return res.render('search-results', {titulo: `Resultados para tu búsqueda: ${buscar}`, productos: results, comentarios: results.comentarios, buscar: buscar});
        })
        
        .catch(error => {
            console.log(error);
        });
    }
}

module.exports = indexController;
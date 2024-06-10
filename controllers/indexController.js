const data = require("../database/models");
const op = data.Sequelize.Op;

const indexController = {
    inicio:
        function (req, res) {
        res.render("index", {title: "Inicio", productos: data.models.product })
        }
    ,
    bus: function (req, res) {
        db.Product.findAll()
        const buscar = req.query.search;
        const filtro = {
            where: {[op.or]: [{ nombre: { [op.like]: '%' + `${buscar}` + '%' } }, { descripcion: { [op.like]: '%' + `${buscar}` + '%' } }]
        }}
        .then(results => {
            return res.render('resultado', {titulo: `Resultados para tu búsqueda: ${buscar}`, productos: results});
        })
        .catch(error => {
            console.log(error);
        })
    }
    
        
    
}

module.exports = indexController;
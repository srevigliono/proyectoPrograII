module.exports = function (sequelize,dataTypes){
   const alias = "Commentt"

   const cols = {
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: dataTypes.INTEGER
    },

    comentario: {
        type: dataTypes.STRING(150),
    },

    producto_id: {
        type: dataTypes.INTEGER,
    },

    usuario_id: {
        type: dataTypes.INTEGER
    }
 };

 const config = {
    tableName:'comentarios',
    timestamps: true,
    underscored: true
 };
 
 const Commentt = sequelize.define(alias, cols, config);

 Commentt.associate = function(models) {
        
    Commentt.belongsTo(models.User, {
        as: 'usuario',
        foreignKey: 'usuario_id'
    });

    Commentt.belongsTo(models.Product, {
        as: 'productos',
        foreignKey: 'producto_id'
    });
}

 return Commentt;

}
module.exports = function (sequelize,dataTypes){
   const alias = "Comment"

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
    tableName:'comentario',
    timestamps: true,
    underscored: true
 };
 
 const Comentario = sequelize.define(alias, cols, config);

 Commentt.associate = function(models) {
        
    Commentt.belongsTo(models.User, {
        as: 'usuario',
        foreignKey: 'usuario_id'
    });

    Commentt.belongsTo(models.Product, {
        as: 'comentarios',
        foreignKey: 'producto_id'
    });
}

 return Comentario;

}
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
 return Comentario;

}
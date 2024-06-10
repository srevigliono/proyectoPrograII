module.exports = function (sequelize,dataTypes){
    const alias = "Product"

    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },

        imagen: {
            type: dataTypes.STRING(100),
        },

        nombre: {
            type: dataTypes.STRING(100),
        },

        descripcion: {
            type: dataTypes.STRING(500),
        },

        usuario_id: {
            type: dataTypes.INTEGER
        }
    };

    const config = {
        tableName:'productos',
        timestamps: true,
        underscored: true
    };

    const Product = sequelize.define(alias, cols, config);
    return Product;
};


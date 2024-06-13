module.exports = function (sequelize, dataTypes){
    const alias = "User"

    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },

        email: {
            type: dataTypes.STRING(100),
        },

        password: {
            type: dataTypes.STRING(100),
        },

        fecha: {
            type: dataTypes.DATE,
        },

        dni: {
            type: dataTypes.INTEGER(11)
        },

        foto: {
            type: dataTypes.STRING(500),
        },

        user:{
            type: dataTypes.STRING(50)
        }

    };

    const config = {
        tableName:'usuarios',
        timestamps: true,
        underscored: true
    };

    const User = sequelize.define(alias,cols,config);
    return User;
};
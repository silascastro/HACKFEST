module.exports = (sequelize, DataTypes) =>{
    const bienvenidos_usuario = sequelize.define('bienvenidos_usuario', {
        id: {type: DataTypes.INTEGER, primaryKey: true},
        funcao: {type: DataTypes.INTEGER},
        email: {type: DataTypes.STRING},
        senha: {type: DataTypes.STRING},
        status: {type: DataTypes.STRING},
        avatar: {type: DataTypes.STRING},
      }, {
        freezeTableName: true,
        //schema: 'public',
        timestamps: false
    });
    
    return bienvenidos_usuario;  
}
module.exports = (sequelize, DataTypes) =>{
    const bienvenidos_publicacao = sequelize.define('bienvenidos_publicacao', {
        id: {type: DataTypes.INTEGER, primaryKey: true},
        depoimento: {type: DataTypes.STRING},
      }, {
        freezeTableName: true,
        //schema: 'public',
        timestamps: false
    });
    
    return bienvenidos_publicacao;  
}
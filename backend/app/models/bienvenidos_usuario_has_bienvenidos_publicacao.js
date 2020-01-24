module.exports = (sequelize, DataTypes) =>{
    const bienvenidos_usuario_has_bienvenidos_publicacao = 
    sequelize.define('bienvenidos_usuario_has_bienvenidos_publicacao', {
        bienvenidos_usuario_id: {type: DataTypes.INTEGER, primaryKey: true},
        bienvenidos_publicacao_id: {type: DataTypes.INTEGER, primaryKey: true},
      }, {
        freezeTableName: true,
        //schema: 'public',
        timestamps: false
    });

    bienvenidos_usuario_has_bienvenidos_publicacao.associate = function(models){
      
      models.bienvenidos_usuario_has_bienvenidos_publicacao.hasMany(models.bienvenidos_usuario, 
        {foreignKey: 'id', as: 'bienvenidos_usuario'});  
        models.bienvenidos_usuario_has_bienvenidos_publicacao.hasMany(models.bienvenidos_publicacao, 
          {foreignKey: 'id', as: 'bienvenidos_publicacao'});  
    };

    
    return bienvenidos_usuario_has_bienvenidos_publicacao;  
}
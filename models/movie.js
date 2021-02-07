'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Movie.belongsTo(models.ProductionHouse,{ foreignKey:"ProdHouseId" })
      Movie.belongsToMany(models.Cast,{through:models.MovieCast,foreignKey:"MovieId"})
    }
  };
  Movie.init({
    name: DataTypes.STRING,
    released_year:{
    type:DataTypes.INTEGER,
    validate:{
       kabisat(){
        let result = new Date(this.released_year,1,29).getDate() === 29 
        if(result){
          throw new Error('gak bisa add movie karena tahun kabisat') 
        }
      }
    }
    }, 
    genre: DataTypes.STRING,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};
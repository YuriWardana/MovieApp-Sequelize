'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cast extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     Cast.belongsToMany(models.Movie,{through:models.MovieCast,foreignKey:"CastId"})
    }

    getFullName(){
      const fullName = this.first_name+' '+this.last_name
      return fullName
    }
  };
  Cast.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    birth_year: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    hooks:{
      beforeCreate:(cast,option)=>{
        if(!cast.last_name){
          cast.last_name = cast.first_name
        }
      },
      afterCreate:(cast,option)=>{
        cast.first_name = cast.first_name.concat(cast.last_name)
        console.log(cast.first_name);
      }
    },
    sequelize,
    modelName: 'Cast',
  });
  return Cast;
};
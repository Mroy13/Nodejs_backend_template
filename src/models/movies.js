'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  movies.init({
    Name:{
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        isAlphanumeric: true
      }
    },
    rating:{
     type: DataTypes.FLOAT,
     allowNull:false,
     validate:{
      max:10
     }
    } ,
    likes:{
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        max:10000000
      }

    }
  }, {
    sequelize,
    modelName: 'movies',
  });
  return movies;
};
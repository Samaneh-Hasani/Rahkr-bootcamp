const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../Utilities/DataBase") ;

const photos = sequelize.define('photos', {
  // Model attributes are defined here
  id: {
    type:DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement:true
  },
  name:{
    type:DataTypes.STRING,
    allowNull:true
  },
  url:{
    type:DataTypes.STRING,
    allowNull:true
  }
}, {
  timestamps:false
});

// `sequelize.define` also returns the model
console.log(photos === sequelize.models.photos); // true
module.exports = photos;
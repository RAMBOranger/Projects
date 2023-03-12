//const Users = require("./Users");

module.exports = (sequelize, DataTypes) => {
  const Services = sequelize.define("Services", {
    service_id: {
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement: true,
    },
    serviceCategory: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    serviceName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vendorName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    servicePrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  });
 
 
  return Services;
};
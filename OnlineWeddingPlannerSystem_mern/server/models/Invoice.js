//const Users = require("./Users");

module.exports = (sequelize, DataTypes) => {
    const Invoices = sequelize.define("Invoices", {
      invoice_id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true,
      },
      hallCharges: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      cateringCharges: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      photographyCharges: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      total: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      
    });  
   
    return Invoices;
  };
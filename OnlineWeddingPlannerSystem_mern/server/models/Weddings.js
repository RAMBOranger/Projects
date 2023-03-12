const { Sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  const Weddings = sequelize.define("Weddings", {
    wedding_id: {
          type: DataTypes.INTEGER,           
          primaryKey: true,
          autoIncrement: true,
        },  
        groomname: {
          type: DataTypes.STRING,  
          allowNull:false,         
        },  
        bridename: {
          type: DataTypes.STRING,  
          allowNull:false,         
        },  
    start_time: {
      type: DataTypes.DATE,
      allowNull: true, 
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: true, 
    },
    hall: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    catering: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photography: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,       
      allowNull: false,
      defaultValue: false
    }
   
  });

  Weddings.associate = (models) => {
    Weddings.hasMany(models.Invoices, {
      onDelete: "cascade",
    });
  };

  
   
  return Weddings;
};

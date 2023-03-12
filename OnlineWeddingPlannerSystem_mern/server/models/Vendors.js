module.exports = (sequelize, DataTypes) => {
    const Vendors = sequelize.define("Vendors", {
      vendorname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      vendoremail: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      vendoraddress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      vendordescription: {
        type: DataTypes.STRING,
        allowNull: false, 
      }
    });
  
    //   Users.associate = (models) => {
    //     Users.hasMany(models.Posts, {
    //       onDelete: "cascade",
    //     });
    //   };
    return Vendors;
  };
  
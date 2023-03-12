module.exports = (sequelize, DataTypes) => {
  const Locations = sequelize.define("Locations", {
    location_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pin_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false, 
    }
  });

  // tables associations
  Locations.associate = (models) => {
      Locations.hasMany(models.Events, {
        onDelete: "cascade",
      });
  }; 
  return Locations;
};
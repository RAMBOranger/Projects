module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "user"
    
    }
  });

  //   Users.associate = (models) => {
  //     Users.hasMany(models.Posts, {
  //       onDelete: "cascade",
  //     });
  //   };
  return Users;
};

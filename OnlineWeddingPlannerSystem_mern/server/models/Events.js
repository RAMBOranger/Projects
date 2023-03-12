module.exports = (sequelize, DataTypes) => {
  const Events = sequelize.define("Events", {
    event_id: {
      type: DataTypes.INTEGER,       
      primaryKey:true,
    },
    event_name: {
      type: DataTypes.STRING,
      allowNull: false,
      },     
   
    start_time_planned: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    end_time_planned: {
      type: DataTypes.DATE,
      allowNull: true,      
    
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: true,
      },
    budget_planned: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      },
     
  });

    
  return Events;
};
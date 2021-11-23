module.exports = (sequelize, DataTypes) => {
  const alias = "Follow";

  const cols = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
  };

  const config = {
    tableName: "follow",
    timestamps: false,
    underscored: true,
  };

  const Follow = sequelize.define(alias, cols, config);

  Follow.associate = function (models) {
    Follow.belongsTo(models.Users, {
      as: "follower",
      foreignKey: "follower_id",
    });
    Follow.belongsTo(models.Users, {
      as: "following",
      foreignKey: "following_id",
    });
  };

  return Follow;
};

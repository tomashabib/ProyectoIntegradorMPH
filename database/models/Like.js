module.exports = (sequelize, DataTypes) => {
  const alias = "Like";

  const cols = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
  };

  const config = {
    tableName: "like",
    timestamps: false,
    underscored: true,
  };

  const Like = sequelize.define(alias, cols, config);

  Like.associate = function (models) {
    Like.belongsTo(models.Users, {
      as: "user",
      foreignKey: "user_id",
    });
    Like.belongsTo(models.Posts, {
      as: "post",
      foreignKey: "post_id",
    });
  };

  return Like;
};

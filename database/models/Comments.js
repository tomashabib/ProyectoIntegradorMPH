module.exports = (sequelize, DataTypes) => {
  const alias = "Comments";
  const cols = {
    comment_id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    post_id: {
      type: DataTypes.STRING,
    },
    com: {
      type: DataTypes.STRING,
    },
  };

  const config = {
    tableName: "comments",
    timestamps: false,
    underscored: true,
  };

  const Comments = sequelize.define(alias, cols, config);

  return Comments;
};

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
      type: DataTypes.INTEGER,
    },
    com: {
      type: DataTypes.STRING,
    },
  };

  const config = {
    tableName: "comments",
    timestamps: true,
    underscored: true,
  };

  const Comments = sequelize.define(alias, cols, config);

  Comments.associate = function (models) {
    Comments.belongsTo(models.Posts, {
      as: "post",
      foreignKey: "post_id",
    });
    Comments.belongsTo(models.Users, {
      as: "commenter",
      foreignKey: "user_id",
    });
  };

  return Comments;
};
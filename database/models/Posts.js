module.exports = (sequelize, DataTypes) => {
  const alias = "Posts";
  const cols = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },

    post_caption: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
  };
  const config = {
    tableName: "post",
    timestamps: false,
    underscored: true,
  };

  const Posts = sequelize.define(alias, cols, config);

  return Posts;
};

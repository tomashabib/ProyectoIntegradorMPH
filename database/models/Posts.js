module.exports = (sequelize, DataTypes) => {
  const alias = "Posts";
  const cols = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    contenido: {
      type: DataTypes.STRING,
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

module.exports = (sequelize, DataTypes) => {
  const alias = "Users";
  const cols = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    username: {
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
    },
    surname: {
      type: DataTypes.STRING,
    },
  };
  const config = {
    tableName: "users",
    timestamps: false,
    underscored: true,
  };

  const Users = sequelize.define(alias, cols, config);

  return Users;
};

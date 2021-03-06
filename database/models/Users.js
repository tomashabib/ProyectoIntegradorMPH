module.exports = (sequelize, DataTypes) => {
  const alias = "Users";
  const cols = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    username: {
      type: DataTypes.STRING,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    surname: {
      type: DataTypes.STRING,
    },
    team: {
      type: DataTypes.STRING,
    },
    gamePosition: {
      type: DataTypes.STRING,
    },
    birthDate: {
      type: DataTypes.DATE,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    nationality: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    profile_picture: {
      type: DataTypes.STRING,
    },
  };
  const config = {
    tableName: "users",
    timestamps: false,
    underscored: true,
  };

  const Users = sequelize.define(alias, cols, config);

  Users.associate = function (models) {
    Users.hasMany(models.Posts, {
      as: "post",
      foreignKey: "user_id",
    });
    Users.hasMany(models.Comments, {
      as: "comments",
      foreignKey: "user_id",
    });
    Users.hasMany(models.Follow, {
      as: "followers",
      foreignKey: "following_id",
    });
    Users.hasMany(models.Follow, {
      as: "following",
      foreignKey: "follower_id",
    });
  };

  return Users;
};

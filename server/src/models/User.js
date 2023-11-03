class User {}

User.init(
  {
    id: DataTypes.INTEGER,
    username: DataTypes.STRING,
  },
  {
    sequelize: db,
    modelName: "user",
  }
);

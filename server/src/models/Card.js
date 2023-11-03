class Card extends User {}
Card.init(
  {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    mojo: DataTypes.INTEGER,
    stamina: DataTypes.INTEGER,
    imgUrl: DataTypes.STRING,
  },
  {
    sequelize: db,
    modelName: "card",
  }
);

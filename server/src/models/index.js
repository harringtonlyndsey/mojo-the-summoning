const { User } = require("./User");

User.hasOne(Deck);
Deck.belongsTo(User);

Deck.hasMany(Card);
Card.belongsTo(Deck);

Card.belongsToMany(Attack, { through: "card-attack" });
Attack.belongsToMany(Card, { through: "card-attack" });

class Deck extends User {}
Deck.init(
  {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    xp: DataTypes.INTEGER,
  },
  {
    sequelize: db,
    modelName: "deck",
  }
);

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

class Attack extends User {}
Attack.init(
  {
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    mojoCost: DataTypes.INTEGER,
    staminaCost: DataTypes.INTEGER,
  },
  {
    sequelize: db,
    modelName: "attack",
  }
);

module.exports = { User, Deck, Card, Attack };

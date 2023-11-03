const { Sequelize, db, Model, DataTypes } = require("../db/config");

class Attack extends Model {}
Attack.init(
  {
    title: DataTypes.STRING,
    mojoCost: DataTypes.INTEGER,
    staminaCost: DataTypes.INTEGER,
  },
  {
    sequelize: db,
    modelName: "attack",
  }
);

module.exports = {
  Attack,
};

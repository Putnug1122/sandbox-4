"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      orders.belongsTo(models.users, { foreignKey: "users_id" });
      orders.belongsTo(models.books, { foreignKey: "books_id" });
    }
  }
  orders.init(
    {
      id: { type: DataTypes.INTEGER(11), primaryKey: true },
      users_id: DataTypes.INTEGER(11),
      books_id: DataTypes.INTEGER(11),
      qty: DataTypes.INTEGER(11),
      order_at: DataTypes.DATE,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "orders",
    }
  );
  return orders;
};

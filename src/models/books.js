"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      books.hasMany(models.orders);
      books.belongsTo(models.type_books, { foreignKey: "type_books_id" });
    }
  }
  books.init(
    {
      id: { type: DataTypes.INTEGER(11), primaryKey: true },
      type_books_id: DataTypes.INTEGER(11),
      name: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "books",
    }
  );
  return books;
};

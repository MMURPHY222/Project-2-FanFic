const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// extending sequelize Model
class Story extends Model {}
// defining column parameters for story table
Story.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.STRING(1000),
    },
    story_content: {
      type: DataTypes.TEXT('long'),
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'story',
  }
);
// exporting for index
module.exports = Story;

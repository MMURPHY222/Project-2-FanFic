const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// extending sequelize Model
class Comment extends Model {}
// creating column parameters for comment table
Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    comment_body: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    story_id: {
      type: DataTypes.INTEGER,
      references: {
          model: 'story',
          key: 'id',
      },
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
    modelName: 'comment',
  }
);
// export for index
module.exports = Comment;

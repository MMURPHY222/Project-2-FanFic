const sequelize = require('../config/connection');
const { User, Story, Comment } = require('../models');
// include all relevant .json files with data
const userData = require('./userData.json');
const storyData = require('./storyData.json');
const commentData = require('./commentData.json');
// creating data from .json files utilizing appropriate models
const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  // render including hooks from model to hash password
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const stories = await Story.bulkCreate(storyData);

  const comments = await Comment.bulkCreate(commentData);

  process.exit(0);
};
// call function
seedDatabase();
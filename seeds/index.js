const sequelize = require('../config/connection');
const { User, Story, Comment } = require('../models');

const userData = require('./userData.json');
const storyData = require('./storyData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const stories = await Story.bulkCreate(storyData);

  const comments = await Comment.bulkCreate(commentData);

  process.exit(0);
};

seedDatabase();
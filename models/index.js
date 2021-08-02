const User = require('./User');
const Story = require('./Story');
const Comment = require('./Comment');
// defining relationships between User, Story, and Comment tables
User.hasMany(Story, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Story.belongsTo(User, {
    foreignKey: 'user_id'
});

Story.hasMany(Comment, {
    foreignKey: 'story_id',
    onDelete: 'CASCADE'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Story, {
    foreignKey: 'story_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});
// export for use
module.exports = {
    User,
    Story,
    Comment
};
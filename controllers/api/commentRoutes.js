const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// route to post new comment to the databse with appropriate foreign keys
router.post('/story/:id', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
      story_id: req.params.id
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

// export for index
module.exports = router;
const router = require('express').Router();
const { Story } = require('../../models');
const withAuth = require('../../utils/auth');

// route to post new story to database with appropriate foreign key
router.post('/', withAuth, async (req, res) => {
  try {
    const newStory = await Story.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newStory);
  } catch (err) {
    res.status(400).json(err);
  }
});

// export for index
module.exports = router;
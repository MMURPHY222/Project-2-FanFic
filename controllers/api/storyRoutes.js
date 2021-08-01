const router = require('express').Router();
const { Story } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/writestory', async (req, res) => {
  try {
    const newStory = await Story.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newStory);
    console.log(newStory);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
const router = require('express').Router();
const { Story, User, Comment } = require('../models');
const withAuth = require('../utils/auth');
// render homepage
router.get('/', (req, res) => {
    res.render('home')
});
// render signup page
router.get('/signup', (req, res) => {
    res.render('signup')
});
// render write-story page
router.get('/writestory', withAuth, (req, res) => {
    res.render('write-story')
});
// render page of all stories with relevant story and user data if user logged in
router.get('/stories', withAuth, async (req, res) => {
  try {
    // Get all stories and JOIN with user data
    const storyData = await Story.findAll({
      include: [
        {
          model: User,
          attributes: ['user_name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const stories = storyData.map((story) => story.get({ plain: true }));
    // Pass serialized data and session flag into template
    res.render('view-stories', { 
      stories, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// render single story with relevant user and comment data if user logged in
router.get('/story/:id', withAuth, async (req, res) => {
  try {
    const storyData = await Story.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });
    // serialize data 
    const story = storyData.get({ plain: true });
    // data and session flag to template
    res.render('story', {
      ...story,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// render profile page with relevant data if user logged in
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Story }],
    });
    // serialize data
    const user = userData.get({ plain: true });
    // data and session flag to template
    res.render('profile', {
      ...user,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
//render login if user is not currently logged in
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to profile page
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  res.render('login');
});
// export for index
module.exports = router;
const router = require('express').Router();
const { Story, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    res.render('home')
});

router.get('/signup', (req, res) => {
    res.render('signup')
});

router.get('/writestory', (req, res) => {
    res.render('write-story')
});

// router.get('/', async (req, res) => {
//     try {

//         const userData = await User.findAll({
//             attributes: { exclude: ['password'] },
//             // order: [['user_name', ASC]]
//         });

//         const users = userData.map((user) => user.get({ plain: true }));

//         res.render('home', {
//             users,
//             logged_in: req.session.logged_in
//         }); // Gives homepage template users to work with and logged_in status
        

//     } catch (err) {
//         res.status(500).json(err);
//     }
// })

router.get('/stories', async (req, res) => {
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
    //   logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/story/:id', async (req, res) => {
  try {
    const storyData = await Story.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['user_name'],
        },
        {
          model: Comment,
          attributes: ['comment_body', 'user_id']
        },
      ],
    });

    const story = storyData.get({ plain: true });

    res.render('story', {
      ...story,
    //   logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Story }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
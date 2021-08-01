const router = require('express').Router();
const { Story, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    res.render('home')
});

router.get('/signup', (req, res) => {
    res.render('signup')
});

router.get('/writestory', withAuth, (req, res) => {
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

router.get('/stories', withAuth, async (req, res) => {
  try {
    // Get all stories and JOIN with user data
    const storyData = await Story.findAll({
      include: [
        User,
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

    const story = storyData.get({ plain: true });
    console.log(story.comments[0].user)
    res.render('story', {
      ...story,
    //   logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Story }],
    });

    const user = userData.get({ plain: true });

    res.render('profile');
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
const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {

        const userData = await User.findAll({
            attributes: { exclude: ['password'] },
            // order: [['user_name', ASC]]
        });

        const users = userData.map((user) => user.get({ plain: true }));

        res.render('home', {
            users,
            logged_in: req.session.logged_in
        }); // Gives homepage template users to work with and logged_in status
        

    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/login', (req, res) => 
    req.session.logged_in ? res.redirect('/') : res.render('login')
);

module.exports = router;
const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {

        const userData = await User.findAll({
            attributes: { exclude: ['password'] },
            order: [['title', ASC]]
        });

        const users = userData.map((user) => user.get({ plain: true }));

    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/login', (req, res) => 
    req.session.logged_in ? res.redirect('/') : res.render('login')
);

module.exports = router;
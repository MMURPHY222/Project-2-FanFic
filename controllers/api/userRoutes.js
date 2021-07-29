const router = require('express').Router();
const { User } = require('../../models');

router.post('/login', (req, res) => {
    try {

        const userData = await User.findOne({ where: { email: req.body.email } }); // Searches for user by target email
        const validPassword = await userData.checkPassword(req.body.password); // Pass check dependent on user data

        if(!userData) {
            res
            .status(400)
            .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        if (!validPassword) {
            res
            .status(400)
            .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/logout', (req, res) => {
    req.session.logged_in // Is the user logged in?
    ? req.session.destroy(() => res.status(204).end()) // If so, destroy the session to log them out
    : res.status(404).end(); // Otherwise, lead the user to a 404 page upon trying to access this route
});
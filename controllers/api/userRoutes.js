const router = require('express').Router();
const { User } = require('../../models');

router.post('/login', (req, res) => {

});

router.post('/logout', (req, res) => {
    req.session.logged_in 
    ? req.session.destroy(() => res.status(204).end())
    : res.status(404).end();
});
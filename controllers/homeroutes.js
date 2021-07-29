const router = require('express').Router();
const { Story } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {

        const storyData = await Story.findAll({
            order: [['title', ASC]]
        });

        const stories = storyData.map((story) => story.get({ plain: true }));

    } catch (err) {
        res.status(500).json(err);
    }
})
const router = require('express').Router();
const { Story } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {

        const storyData = await Story.findAll({
            attributes: { exclude: ['password'] },
            order: [['name', ASC]]
        });

    } catch {
        
    }
})
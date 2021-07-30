const nodemailer = require('nodemailer');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
        user: "brooks.gunn@vikings.berry.edu",
        pass: process.env.EM_PASS
    }
});
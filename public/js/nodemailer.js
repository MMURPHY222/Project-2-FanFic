const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EM_EMAIL,
        pass: process.env.EM_PASS
    }
});

const options = {
    from: process.env.EM_EMAIL,
    to: process.env.TEST_EMAIL,
    subject: "This is a test email from Node JS.",
    text: "Hopefully this works!"
}

transporter.sendMail(options, (err, info) => {
    if (err) console.log(err);
    console.log(info);

    console.log("Email successfully sent: " + info?.response);
});
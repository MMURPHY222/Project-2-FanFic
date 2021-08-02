const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "onlyfanficsgt@gmail.com",
        pass: "!Pass12345"
    }
});

const options = {
    from: "onlyfanficsgt@gmail.com",
    to: process.env.TEST_EMAIL,
    subject: "Welcome {USER}",
    text: "Dear {USER},\n\nYou have successfully signed up for OnlyFanFics!\n\nWe look forward to having you in our community!\n\nYours Sincerely,\nThe OnlyFanFics Team"
}

transporter.sendMail(options, (err, info) => {
    if (err) console.log(err);
    console.log(info);

    console.log("Email successfully sent: " + info?.response);
});
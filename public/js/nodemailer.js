// const nodemailer = require('nodemailer');
// // const path = require('path');
// // require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

// const signupForm = document.querySelector(".signup-form");
// const userName = document.querySelector('#username-signup').value.trim();
// const userEmail = document.querySelector('#email-signup').value.trim();

// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: "onlyfanficsgt@gmail.com",
//         pass: "!Pass12345"
//     }
// });

// const options = {
//     from: "onlyfanficsgt@gmail.com",
//     to: `${userEmail}`,
//     subject: `Welcome ${userName}`,
//     text: `Dear ${userName},\n\nYou have successfully signed up for OnlyFanFics!\n\nWe look forward to having you in our community!\n\nYours Sincerely,\nThe OnlyFanFics Team`
// }

// signupForm.addEventListener("submit", event => {

//     event.preventDefault();

//     transporter.sendMail(options, (err, info) => {
//         if (err) console.log(err);
        
//         console.log("Email successfully sent: " + info?.response);
//     });

// });
// const nodemailer = require('nodemailer');
// const path = require('path');
// require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

// const signupForm = document.querySelector(".signup-form");
// const userName = document.querySelector('#username-signup').value.trim();
// const userEmail = document.querySelector('#email-signup').value.trim();
// console.log(req.body);

// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: "onlyfanficsgt@gmail.com",
//         pass: "!Pass12345"
//     }
// });

// const options = {
//     from: "onlyfanficsgt@gmail.com",
//     to: `brooks.a.gunn@gmail.com`,
//     subject: `Welcome {USER}`,
//     text: `Dear {USER},\n\nYou have successfully signed up for OnlyFanFics!\n\nWe look forward to having you in our community!\n\nYours Sincerely,\nThe OnlyFanFics Team`
// }

// signupForm.addEventListener("submit", event => {

//     event.preventDefault();

//     transporter.sendMail(options, (err, info) => {
//         if (err) console.log(err);
        
//         console.log("Email successfully sent: " + info?.response);
//     });

// });
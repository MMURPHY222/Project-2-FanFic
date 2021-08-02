// checking if logged in or redirecting to login page
const withAuth = (req, res, next) => !req.session.logged_in ? res.redirect('/login') : next();
// exported
module.exports = withAuth;
const router = require("express").Router();
const { User } = require("../../models");

// route posting new user data to server for sign-up
router.post("/signup", async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// route checking user input against existing user data to log in
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { user_name: req.body.username },
    });
    const validPassword = await userData.checkPassword(req.body.password);
    // notification if username doesn't match
    if (!userData) {
      res
        .status(400)
        .json({
          message: "Incorrect username or password entered. Please try again.",
        });
      return;
    }
    // notification if password doesn't match
    if (!validPassword) {
      res
        .status(400)
        .json({
          message:
            "Incorrect email address or password entered. Please try again.",
        });
      return;
    }
    // save user id and logged_in to session
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({
        user: userData,
        message: "You have successfully logged in. Enjoy!",
      });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});
// destroy session storage on logout if logged in, otherwise send to 404
router.post("/logout", (req, res) => {
  req.session.logged_in
    ? req.session.destroy(() => res.status(204).end())
    : res.status(404).end();
});
// export for index
module.exports = router;

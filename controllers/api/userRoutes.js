const router = require("express").Router();
const { User } = require("../../models");

router.post("/signin", async (req, res) => {
  console.log(req.body);
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

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { user_name: req.body.username },
    }); // Searches for user by target email
    const validPassword = await userData.checkPassword(req.body.password); // Pass check dependent on user data

    if (!userData) {
      res
        .status(400)
        .json({
          message: "Incorrect username or password entered. Please try again.",
        });
      return;
    }

    if (!validPassword) {
      res
        .status(400)
        .json({
          message:
            "Incorrect email address or password entered. Please try again.",
        });
      return;
    }

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

router.post("/logout", (req, res) => {
  req.session.logged_in // Is the user logged in?
    ? req.session.destroy(() => res.status(204).end()) // If so, destroy the session to log them out
    : res.status(404).end(); // Otherwise, lead the user to a 404 page upon trying to access this route
});

module.exports = router;

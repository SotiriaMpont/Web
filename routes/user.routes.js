const authorization = require("../middlewares/authorization");
const AuthController = require("../controllers/AuthController");

module.exports = function (app) {
  const authController = new AuthController();

  // arxiki selida tou login
  app.get("/login", function (req, res) {
    res.render("login");
  });

  app.get("/", function (req, res) {
    res.render("login");
  });

  app.get("/logout", authorization, (req, res) => {
    return authController.SignOut(req, res);
  });

  app.post("/login", async (req, res) => {
    return await authController.SignInAsync(req, res);
  });

  //selida tou register

  app.get("/register", function (req, res) {
    res.render("register.ejs");
  });

  app.post("/register", async (req, res) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     return res.status(400).json({ errors: errors.array() });
    // }
    return await authController.SignUpAsync(req, res);
  });

  //allagh stoixeiwn xrhsth
  app.get("/profile_change", function (req, res) {
    res.render("profile_change.ejs");
  });
  app.post("/profile_change", function (req, res) {
    res.render("profile_change.ejs");
  });
};

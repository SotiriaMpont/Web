const AuthController = require("../controllers/AuthController");
const authorization = require("../middlewares/authorization");
module.exports = function (app) {
  // arxiki selida tou login
  app.get("/submitVisit", function (req, res) {
    res.render("submitVisit.ejs");
  });

  app.post("/submitVisit", async (req, res) => {
    const authController = new AuthController();
    return await authController.SignInAsync(req, res);
  });
};

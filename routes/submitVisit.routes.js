const UserController = require("../controllers/UserController");
const authorization = require("../middlewares/authorization");
module.exports = function (app) {
  // arxiki selida tou login
  app.get("/submitVisit", function (req, res) {
    res.render("submitVisit.ejs");
  });

  app.post("/submitVisit", async (req, res) => {
    const userController = new UserController();
    return await userController.SignInAsync(req, res);
  });
};

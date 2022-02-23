const authorization = require("../middlewares/authorization");
const UserController = require("../controllers/UserController");
const CheckModeratorRole = require("../middlewares/CheckModeratorRole");
const Poi = require("../models/poi.model");
const PoiController = require("../controllers/PoiController");

module.exports = function (app) {
  //mainpage
  app.get(
    "/mainpage",
    [authorization, CheckModeratorRole],
    function (req, res) {
      res.render("mainpage.ejs");
    }
  );

  app.post("/mainpagetypes", async (req, res) => {
    const poiController = new PoiController();
    return await poiController.GetCoords(req, res);
  });

  //allagh stoixeiwn xrhsth
  app.get("/mainpage/profile_change",[authorization, CheckModeratorRole], function (req, res) {
    res.render("profile_change.ejs");
  });

  app.post("/mainpage/profile_change", async (req, res) => {
    const userController = new UserController();
    return await userController.EditAsync(req, res);
  });

  //dilosi krousmatos
  app.get("/mainpage/dilosi",[authorization, CheckModeratorRole], function (req, res) {
    res.render("dilosi.ejs");
  });

  app.post("/mainpage/dilosi", async (req, res) => {
    const userController = new UserController();
    return await userController.dilosi(req, res);
  });
};

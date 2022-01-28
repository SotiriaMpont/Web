const PoiService = require("../Service/PoiService");

class PoiController {
  async findbyid(req, res) {
    const poiId = req.body.id;
    const poiService = new PoiService();
    const poi = await poiService.findbyid(poiId);
    res.send(poi);
  }

  async GetCoords(req, res) {
    const search = req.body.search;
    const poiService = new PoiService();

    const RespondePoi = await poiService.GetCoords(search);
    res.send(RespondePoi);
  }
}
module.exports = PoiController;

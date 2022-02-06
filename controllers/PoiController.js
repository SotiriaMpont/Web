const PoiService = require("../Service/PoiService");

class PoiController {
  #poiService = new PoiService(); //kanw private to poiService

  async findbyid(req, res) {
    const poiId = req.body.id;
    const poi = await this.#poiService.findbyid(poiId);
    res.send(poi);
  }

  async GetCoords(req, res) {
    //epistrefei ta poisitions
    const search = req.body.search;
    const RespondePoi = await this.#poiService.GetCoords(search);
    res.send(RespondePoi);
  }

  // async GetCurrentLoc(req, res) {
  //   //epistrefei  to location tou usr
  //   const currentLoc = await this.#poiService.GetGetCurrentLoc(
  //     req.socket.remoteAddress
  //   );
  //   res.send(currentLoc);
  // }
}
module.exports = PoiController;

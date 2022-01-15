const PoiService = require("../Service/PoiService");

class PoiController {
    async findbyid(req, res) {
        const poiId = req.body.id;
        const poiService = new PoiService();
        const poi = await poiService.findbyid(poiId);
        res.send(poi);
    }
}
module.exports = PoiController;
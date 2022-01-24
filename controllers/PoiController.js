const PoiService = require("../Service/PoiService");

class PoiController {
    async findbyid(req, res) {
        const poiId = req.body.id;
        const poiService = new PoiService();
        const poi = await poiService.findbyid(poiId);
        res.send(poi);
    }
    
    
    async findbyType(req, res) {

        const poiType = req.body.InputValue;
        const poiService = new PoiService();

        const RespondePoiType = await poiService.findbyType(poiType);

        if (poiType == 'food') {

            res.send(RespondePoiType.lat, RespondePoiType.lgn);

        

        }


    }
}
module.exports = PoiController;

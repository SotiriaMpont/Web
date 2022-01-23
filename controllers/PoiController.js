const PoiService = require("../Service/PoiService");

class PoiController {
    async findbyid(req, res) {
        const poiId = req.body.id;
        const poiService = new PoiService();
        const poi = await poiService.findbyid(poiId);
        res.send(poi);
    }
    
    
    async findbyType(req, res) {

        const poiTypeFood = req.body.types;
        const poiService = new PoiService();

        const RespondePoiFood = await poiService.findbyTypeFood(poiTypeFood);

        if (poiTypeFood == 'food') {

            res.send(RespondePoiFood.lat, RespondePoiFood.lgn);

        

        }


    }
}
module.exports = PoiController;

const PoiService = require("../Service/PoiService");

class PoiController {
    async findbyid(req, res) {
        const poiId = req.body.id;
        const poiService = new PoiService();
        const poi = await poiService.findbyid(poiId);
        res.send(poi);
    }
    
    
    async findbyType(req, res) {
        const poiType = req.body.search;
        const poiService = new PoiService();

        const RespondePoiTypelat = await poiService.findbyTypelat(poiType);
        const RespondePoiTypelng = await poiService.findbyTypelng(poiType);
        
        if (poiType == 'food') {

            res.send
                RespondePoiTypelat
                RespondePoiTypelng 
                
        

        }


    }
}
module.exports = PoiController;

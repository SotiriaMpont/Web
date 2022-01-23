const db = require("../models/index");

class PoiRepository {
    async findbyid(id) {
        const PoiModel = db.poi;
        return await PoiModel.findOne({
            name: 'Flocafe'
        }).exec();
    }
    
    
     // BRISKEI ME TYPE==FOOD 
    async findbyTypeFood(types) {
        const PoiModel = db.poi;
        return await PoiModel.find({ type: "food" })
    }
}

module.exports = PoiRepository;

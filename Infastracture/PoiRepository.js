const db = require("../models/index");

class PoiRepository {
    async findbyid(id) {
        const PoiModel = db.poi;
        return await PoiModel.findOne({
            name: 'Flocafe'
        }).exec();
    }
}

module.exports = PoiRepository;
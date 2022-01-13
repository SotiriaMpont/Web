const db = require("../models/index");

class Repository {
    async findbyid(id) {
        const PoiModel = db.poi;
        return await PoiModel.findOne({
            name: 'Flocafe'
        }).exec();
    }
}

module.exports = Repository;
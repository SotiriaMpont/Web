const db = require("../models/index");

class PoiRepository {
  async findbyid(type) {
    const PoiModel = db.poi;
    return await PoiModel.findOne({}).exec();
  }
}

module.exports = PoiRepository;

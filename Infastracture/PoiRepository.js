const db = require("../models/index");

class PoiRepository {
  async findBy(query, fields) {
    const PoiModel = db.poi;
    return await PoiModel.find(query, fields).exec(); //epistrefei ena array apo poi
  }
}

module.exports = PoiRepository;

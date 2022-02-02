const db = require("../models/index");

class PoiRepository {
    async findBy(query, fields) {
      const PoiModel = db.poi;
      return await PoiModel.find(query, fields).exec(); //epistrefei ena array apo poi
    }
    
    async Upload(myDesiredEggrafes) {
      
      const PoiModel = db.poi;
      return await PoiModel.create(myDesiredEggrafes);

    }
}

module.exports = PoiRepository;

const db = require("../models/index");

class PoiRepository {
    async findBy(query, fields) {
      const PoiModel = db.poi;
      return await PoiModel.find(query, fields).exec(); //epistrefei ena array apo poi
    }
    async PoiExists(theNewPoi){
      const PoiModel = db.poi;
      return await PoiModel.name.includes("admin");
    }
    
    async Upload(theNewPoi) {
      
      const PoiModel = db.poi;
      return await PoiModel.create(theNewPoi);

    }
    async Delete() {
      
      const PoiModel = db.poi;
      return await PoiModel.remove({});

    }
}

module.exports = PoiRepository;

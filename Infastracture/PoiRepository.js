const db = require("../models/index");

class PoiRepository {
    async findbyid(id) {
        const PoiModel = db.poi;
        return await PoiModel.findOne({
            name: 'Flocafe'
        }).exec();
    }
    
    
     // BRISKEI ME TYPE==FOOD 
    async findbyTypelat(types) {
        const PoiModel = db.poi;
        return await PoiModel.find(
            {types: types},
            {id: 0,
            name: 0,
            address: 0,
            types: 0,
            coordinates: {
                lat: 1,
                lng: 0
            },
            rating: 0,
            rating_n: 0,
            populartimes: 0
            }
        )
    }
    async findbyTypelatlng(types) {
        const PoiModel = db.poi;
        return await PoiModel.find(
            {types: types},
            {id: 0,
            name: 0,
            address: 0,
            types: 0,
            coordinates: {
                lat: 0,
                lng: 1
            },
            rating: 0,
            rating_n: 0,
            populartimes: 0
            }
        )
    }
}

module.exports = PoiRepository;

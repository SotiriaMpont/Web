const PoiRepository = require("../Infastracture/PoiRepository");

class PoiService {
  #repo = new PoiRepository();

  async GetCoords(search) {
    //kalw thn findBy me to value pou exw parei apo to search
    const query = {
      //me ayto ton tropo ousiastika kanw to select
      $or: [
        {
          name: search,
        },
        {
          types: { $eq: search },
        },
      ],
    };
    const fields = {
      _id: 0,
      coordinates: 1,
    };

    const coords = await this.#repo.findBy(query, fields);
    return coords;
  }
}
module.exports = PoiService;

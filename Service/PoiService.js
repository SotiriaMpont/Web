const PoiRepository = require("../Infastracture/PoiRepository");
var geoip = require("geoip-lite");

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
      name: 1,
      coordinates: 1,
      populartimes: 1,
      current_popularity: 1,
    };
    //dhmiourgw ena array gia antistoixhsh tou date me to onoma tou
    var weekday = new Array(7);
    weekday[0] = "Monday";
    weekday[1] = "Tuesday";
    weekday[2] = "Wednesday";
    weekday[3] = "Thursday";
    weekday[4] = "Friday";
    weekday[5] = "Saturday";
    weekday[6] = "Sunday";

    const poi = await this.#repo.findBy(query, fields);

    const newpoi = poi.map((s) => {
      var now = new Date(); //poia mera
      let populartimes; //to pososto episkepsimothtas
      let visits = s.populartimes.find((p) => p.name === weekday[now.getDay()]);
      if (!visits) {
        populartimes = 0.0; //keno object
      } else {
        populartimes =
          (visits.data[now.getHours()] + visits.data[now.getHours() + 1]) / 2; //ypologizw thn episkepsimothta
      }
      const poi = {
        coordinates: {
          lat: s.coordinates.lat,
          lng: s.coordinates.lng,
        },
        name: s.name,
        current_popularity: s.current_popularity,
        populartimes: populartimes,
      };
      return poi;
    });
    return newpoi;
  }
}
module.exports = PoiService;

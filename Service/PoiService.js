const PoiRepository = require("../Infastracture/PoiRepository");

class PoiService {
    #repo = new PoiRepository();

    async findbyid(id) {
        return await this.#repo.findbyid(id);
        
    }
    async findbyType(types) {

        return await this.#repo.findbyType(types);
    }
    
}
module.exports = PoiService;

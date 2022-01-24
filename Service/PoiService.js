const PoiRepository = require("../Infastracture/PoiRepository");

class PoiService {
    #repo = new PoiRepository();

    async findbyid(id) {
        return await this.#repo.findbyid(id);
        
    }
    async findbyTypelat(types) {

        return await this.#repo.findbyTypelat(types);
    }
    async findbyTypelng(types) {

        return await this.#repo.findbyTypelng(types);
    }
    
}
module.exports = PoiService;

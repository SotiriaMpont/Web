const PoiRepository = require("../Infastracture/PoiRepository");

class PoiService {
    #repo = new PoiRepository();

    async findbyid(id) {
        return await this.#repo.findbyid(id);
    }
}
module.exports = PoiService;
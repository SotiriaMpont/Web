const Repository = require("../Infastracture/Repository");

class PoiService {
    #repo = new Repository();

    async findbyid(id) {
        return await this.#repo.findbyid(id);
    }
}
module.exports = PoiService;
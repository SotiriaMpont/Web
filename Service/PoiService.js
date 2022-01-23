const PoiRepository = require("../Infastracture/PoiRepository");

class PoiService {
    #repo = new PoiRepository();

    async findbyid(id) {
        return await this.#repo.findbyid(id);
        
        
         #RepoFood = new PoiRepository();

    async findbyType(types) {

        const types = await this.#RepoFood.FindbyUserName(types);
        return await this.#RepoFood.findbyType(type);
    }
    }
}
module.exports = PoiService;

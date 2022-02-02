const PoiRepository = require("../Infastracture/PoiRepository");

class AdminService {
    #repo = new PoiRepository();

    async UploasFiles(myDesiredEggrafes) {

        upload = await this.#repo.Upload(myDesiredEggrafes);
    }
    
}
module.exports = AdminService;
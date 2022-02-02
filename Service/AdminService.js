const PoiRepository = require("../Infastracture/PoiRepositroy");

class AdminService {
    #repo = new PoiRepository();


    upload = await this.#repo.Upload(myDesiredEggrafes);
    
}
module.exports = AdminService;
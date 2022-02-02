const PoiRepository = require("../Infastracture/PoiRepository");

class AdminService {
    #repo = new PoiRepository();



    upload =  this.#repo.Upload(myDesiredEggrafes);
    
}
module.exports = AdminService;
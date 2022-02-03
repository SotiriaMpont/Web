const PoiRepository = require("../Infastracture/PoiRepository");

class AdminService {
    #repo = new PoiRepository();

    async Uploadfiles(theNewPoi){

        const resultforname = await this.#repo.PoiExists(theNewPoi);
        if(resultforname)
            console.log("Some positions already exist")
        else{ 
            const upload = await this.#repo.Upload(theNewPoi);
        }
    }

    async Deletefiles(){
        const deleteall = await this.#repo.Delete();
    }
    
}
module.exports = AdminService;
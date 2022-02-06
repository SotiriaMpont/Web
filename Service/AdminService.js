const PoiRepository = require("../Infastracture/PoiRepository");

class AdminService {
    #repo = new PoiRepository();

    async Uploadfiles(theNewPoi){

        //elegxos diplotipon eggrafon
        for(var i=0;i<theNewPoi.length;i++){
            const poiname=theNewPoi[i].name
            if(await this.#repo.PoiExists(poiname)){//tsekarw gia kathe poi an uparxei hdh
                console.log(poiname);
                console.log("Already exists so we didn't add it");
            }
            else{ 
                const upload = await this.#repo.Upload(theNewPoi[i]);
            }
        }
        
       
    }

    async Deletefiles(){
        const deleteall = await this.#repo.Delete();
        return deleteall;
    }
    
}
module.exports = AdminService;
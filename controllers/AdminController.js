const AdminService = require("../Service/AdminService");




class AdminController {
    #AdminService = new AdminService();

    async Uploadfiles(req, res) {
      
         // dexetai to arxeio json tou admin

         const file = req.myFiles;

         // to diabazei gia na dei tis eggrafes sto susthma
         const fileData = JSON.parse(file.data);
 
         const myDesiredEggrafes = fileData.map(eggrafh => {
             return {
                 id: eggrafh.id,
                 name: eggrafh.name,
                 types: eggrafh.types,
                 address: eggrafh.address,
                 coordinates: eggrafh.coordinates,
                 populartimes: eggrafh.populartimes,
             }
         })
         
         console.log(myDesiredEggrafes);
         
         //prepei na perasoun oi eggrafes sthn vash
         const result = await this.#AdminService.Uploadfiles(myDesiredEggrafes);
        

    }
    

 


}

module.exports = AdminController;
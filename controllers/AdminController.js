const AdminService = require("../Service/AdminService");




class AdminController {
    #AdminService = new AdminService();

    async Uploadfiles(req, res) {
        const file = req.files.InputFile;
        

        //2 
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
    

    async SignOut(res) {
        res
            .clearCookie("access_token")
            .redirect('/login');
    }


}

module.exports = AdminController;
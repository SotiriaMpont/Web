const AdminService = require("../Service/AdminService");




class AdminController {
    #AdminService = new AdminService();

    async Uploadfiles(req, res) {
        const file = req.files.myFile;
        
        const fileData = JSON.parse(file.data);
    
        const theNewPoi = fileData.map(newPoi => {
            return {
                id: newPoi.id,
                name: newPoi.name,
                types: newPoi.types,
                address: newPoi.address,
                coordinates: newPoi.coordinates,
                populartimes: newPoi.populartimes,
            }
        })
    
        console.log(theNewPoi);
        //gia na perastoun oi eggrafes
        const result = await this.#AdminService.Uploadfiles(theNewPoi);

        res.send(result);
        

    }

    async Deletefiles(res){
        const result = await this.#AdminService.Deletefiles();
        res.send(result);
    }
    

    async SignOut(res) {
        res
            .clearCookie("access_token")
            .redirect('/login');
    }


}

module.exports = AdminController;
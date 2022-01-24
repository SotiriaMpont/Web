const authorization = require("../middlewares/authorization");
const AuthController = require("../controllers/AuthController");
const CheckModeratorRole = require("../middlewares/CheckModeratorRole");
const Poi = require("../models/poi.model");

module.exports = function(app) {

    //mainpage
    app.get('/mainpage', [authorization, CheckModeratorRole], function(req, res) {
        res.render('mainpage.ejs')
    });
    app.post('/mainpage', async (req, res) => {
        const PoiController = new PoiController();
        return await PoiController.findbyType(req, res);
    });

     //allagh stoixeiwn xrhsth
    app.get('/mainpage/profile_change', function (req, res) {
        res.render('profile_change.ejs')
    });
    app.post('/mainpage/profile_change', async (req, res)=> {
        const authController = new AuthController();
        return await authController.EditAsync(req, res);
    }); 
    
    

    //admin
    app.get('/admin', function(req, res) {
        res.render('admin.ejs');
    });

    app.post('/admin', function(req, res) {
        console.log('Eimai ston admin');
        console.log(req.body);
    });


    //pairnw ta dedomena poy kanei upload o admin
    app.post('/sendpoifile', async function(req, res) {
        // dexetai to arxeio json tou admin

        const file = req.files.myFile;

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
    })


    app.post('\mainpage', async(req, res) => {

        const PoiController = new PoiController();
        return await PoiController.findbyTypeFood(req, res);

    })
    


};


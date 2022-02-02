const authorization = require("../middlewares/authorization");
const AuthController = require("../controllers/AuthController");
const authorization = require("../middlewares/authorization");
const CheckAdminRole = require("../middlewares/CheckAdminRole");

module.exports = function(app) {

    //admin
    app.get('/admin',[authorization,CheckAdminRole], function(req, res) {
        res.render('admin.ejs');
    });

    app.post('/admin', function (req, res) {
        console.log('Eimai ston admin');
        console.log(req.body);
    });

    app.get("admin/logout", authorization, (req, res) => {
        const authController = new AuthController();
        return authController.SignOut(res);
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
};
const authorization = require("../middlewares/authorization");
const CheckModeratorRole = require("../middlewares/CheckModeratorRole")

module.exports = function (app) {

    //mainpage
    app.get('/mainpage', [authorization, CheckModeratorRole], function (req, res) {
        res.render('mainpage.ejs')
    });

    //admin
    app.get('/admin', function (req, res) {
        res.render('admin.ejs');
    });

    app.post('/admin', function (req, res) {
        console.log('Eimai ston admin');
        console.log(req.body);
    });

    
    //pairnw ta dedomena poy kanei upload o admin
    app.post('/sendpoifile', async function (req, res) {
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
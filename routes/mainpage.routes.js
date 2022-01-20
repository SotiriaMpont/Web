const authorization = require("../middlewares/authorization");
const CheckModeratorRole = require("../middlewares/CheckModeratorRole");
const Poi = require("../models/poi.model");

module.exports = function(app) {

    //mainpage
    app.get('/mainpage', [authorization, CheckModeratorRole], function(req, res) {
        res.render('mainpage.ejs')
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


    app.get('/Datasent', function(req, res) {

    })


    app.post('/Datasent', function(res, req) {

        const userSearchFor = req.body.InputData
            // prepei na psaxeis shtn vash na vreis poies topo8esies exoun type auto pou egrapse o xristis

        for (var i = 0; i < Positions.length; i++) { // elegxw gia  kathe stoixeio toy collection position

            if (userSearchFor == 'food') { // an auto pou egrapse o xristis einai iso me 

                const ArrayOfResults = poi.find({ type: 'food' })
            }

            res.send(ArrayofResults)
        }




    })
};

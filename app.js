const express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const db = require("./models");
const dbConfig = require("./config/db.config");
const User = db.user;
const Role = db.role;

const app = express();

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

var path = require('path');

app.listen(8080, function () {
    console.log("Server started on port 8080")
});

app.use('/public', express.static(path.join(__dirname, "public")));
app.use(express.json()); // tou lew oti ta  arxeia mou tha einai json (to body moy tha einai se morfh json)
app.use(fileUpload())
app.set('view engine', 'ejs');
app.set('views', './views')

//sundesh me mongoose sthn bash
//mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/MyVisit', {
//    useNewUrlParser: true,
//    useUnifiedTopology: true
//});
//
//mongoose.connection.on('connected', () => {
//    console.log('Mongoose is connected!!!!');
//});


// arxiki selida tou login 
app.get('/', function (req, res) {

    console.log(req);
    res.render('login.ejs')

})

app.post('/', function (req, res) {
    User. findOne({
        username: "admin"
    })
    .populate('roles')
    .exec((err, user) => {
        console.log(user);
        console.log(err);
    });


    const usernameClient = req.body.username;
    const passwordClient = req.body.password;


    //tha prostethoun kai alla edw//

    if (usernameClient == user.username && passwordClient == user.password) {
        console.log('o server epistrefei Epityxia!'); // den emfanizei akoma!!!!
        res.send('success');
    } else {
        console.log('o server epistrefei Apotyxia!'); // den to emfanizei pros to paron 
        res.send('fail');
    }

})

//selida tou register 

app.get('/register', function (req, res) {
    console.log(req);
    res.render('register.ejs');
})

app.post('/register', function (req, res) {
    console.log('Eimai ston register');
    console.log(req.body);

})


//mainpage

app.get('/mainpage', function (req, res) {
    res.render('mainpage.ejs')
})



//admin
app.get('/admin', function (req, res) {
    res.render('admin.ejs');
})

app.post('/admin', function (req, res) {
    console.log('Eimai ston admin');
    console.log(req.body);

})

//den douleuei akoma
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

}
)
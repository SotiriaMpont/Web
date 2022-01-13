const fileUpload = require('express-fileupload');
const express = require("express");
var bodyParser = require('body-parser')
const db = require("./models/index");
const path = require("path");
const dbConfig = require("./config/db.config");
const authConfig = require("./config/auth.config");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const AuthController = require("./controllers/AuthController");

const app = express();

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

db.mongoose
    .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Successfully connect to MongoDB.");
    })
    .catch(err => {
        console.error("Connection error", err);
        process.exit();
    });

const start = (port) => {
    try {
        app.listen(port, () => {
            console.log(`Api up and running at: http://localhost:${port}`);
        });
    } catch (error) {
        console.error(error);
        process.exit();
    }
};
start(8080);

app.use(cookieParser());
app.use('/public', express.static(path.join(__dirname, "public")));
app.use(express.json()); // tou lew oti ta  arxeia mou tha einai json (to body moy tha einai se morfh json)
app.use(fileUpload())
app.set('view engine', 'ejs');
app.set('views', './views')

const authorization = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return res.sendStatus(403);
    }
    try {
        const data = jwt.verify(token, authConfig.secret);
        req.userId = data.id;
        //req.userRole = data.role;
        return next();
    } catch (ex) {
        console.log(ex)
        return res.sendStatus(403);
    }
};

// arxiki selida tou login 
app.get('/login', function (req, res) {
    res.render('login.ejs')
})

app.get('/', function (req, res) {
    res.render('login.ejs')
})
app.get("/logout", authorization, (req, res) => {
    const authController = new AuthController();
    return authController.SignOut(res);
});

app.post('/login', async (req, res) => {
    const authController = new AuthController();
    return await authController.SignInAsync(req, res);
});
//selida tou register 

app.get('/register', function (req, res) {
    res.render('register.ejs');
})

app.post('/register', async (req, res) => {
    const authController = new AuthController();
    return await authController.SignUpAsync(req, res);
})

//mainpage
app.get('/mainpage', authorization, function (req, res) {
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
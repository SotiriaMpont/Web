const express = require('express');
var ejs = require('ejs');
const app = express();
var path = require('path');
var bodyParser = require('body-parser'); //

app.listen(8080, function() {
    console.log("Server started on port 8080")
});

app.use('/public', express.static(path.join(__dirname, "public")));
app.use(express.json()); // tou lew oti ta  arxeia mou tha einai json (to body moy tha einai se morfh json)
app.set('view engine', 'ejs');
app.set('views', './views')

// arxiki selida tou login 
app.get('/', function(req, res) {

    console.log(req);
    res.render('login.ejs')

})

app.post('/', function(req, res) {
    console.log('douleuei!');
    console.log(req.body);
})

//selida tou register 

app.get('/register', function(req, res) {
    console.log(req);
    res.render('register.ejs');
})

app.post('/register', function(req, res) {
    console.log('Eimai ston register');
    console.log(req.body);
})


//mainpage

app.get('/mainpage', function(req, res) {
    console.log(req);
    res.render('mainpage.ejs');
})

app.post('/mainpage', function(req, res) {
    console.log('Eimai sto mainpage');
    console.log(req.body);
})
const express = require('express');
var ejs = require('ejs');
const app = express();

const user = {
    username: 'testuser',
    password: 'passwrd'

}
var path = require('path');
var bodyParser = require('body-parser'); 

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
    console.log('douleuei logika !'); //mpompa to emfanizei
    console.log(req.body); // kai auto do3a TO THEO 

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
    res.render('mainpage.ejs')
})

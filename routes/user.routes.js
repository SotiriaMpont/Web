const authorization = require("../middlewares/authorization");
const UserController = require("../controllers/UserController");


module.exports = function (app) {
    // arxiki selida tou login 
    app.get('/login', function (req, res) {
        res.render('login.ejs')
    });

    app.get('/', function (req, res) {
        res.render('login.ejs')
    });

    app.get("/logout", authorization, (req, res) => {
        const userController = new UserController();
        return userController.SignOut(res);
    });

    app.post('/login', async (req, res) => {
        const authController = new UserController();
        return await authController.SignInAsync(req, res);
    });
    //selida tou register 

    app.get('/register', function (req, res) {
        res.render('register.ejs');
    })

    app.post('/register', async (req, res) => {
            // const errors = validationResult(req);
            // if (!errors.isEmpty()) {
            //     return res.status(400).json({ errors: errors.array() });
            // }
            const authController = new UserController();
            return await authController.SignUpAsync(req, res);
           
    });

    

  
    


    
};

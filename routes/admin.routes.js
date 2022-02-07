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

    app.get("/admin/logout", (req, res) =>{
        const authController = new AuthController();
        return authController.SignOut(res);
    });

    //pairnw ta dedomena poy kanei upload o admin
    app.post('/sendpoifile',  async (req, res) => {
        const authController = new AuthController();
        return await authController.Uploadfiles(req, res);
    });
    app.post('/deletepoifiles',  async (req,res) => {
        const authController = new AuthController();
        return await authController.Deletefiles(res);
    });

       
};
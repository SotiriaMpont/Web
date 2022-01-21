const UserService = require("../Service/UserService");

class AuthController {
  #UserService = new UserService();

  async SignInAsync(req, res) {
    //eisodos xrhsth sthn efarmogh
    const username = req.body.username;
    const password = req.body.password;

    const result = await this.#UserService.SignInAsync(username, password);

    if (!result || !result.success) {
      return res.status(404).send({ message: "User Not found." }); //an o xrhsths den yparxei epistrefei mhnyma la8ous
    }
    //an uparxei epistrefei ta parakatw stoixeia
    req.session.user = {
      email: result.email,
      username: result.username,
    };

    res
      .cookie("access_token", result.accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      })
      .redirect("/mainpage"); //pros8etei to token sto main page wste na paramenei o xrhsths sundedemenos gia 1 session
  }

  async SignUpAsync(req, res) {
    //egrafh xrhsth
    const user = {
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      psw_repeat: req.body.psw_repeat,
      roles: ["moderator"],
    };

    const success = await this.#UserService.SignUpAsync(user);

    if (!success) return res.status(404).send({ message: "User Not found." });

    res.redirect("/login"); // an o xrhsths dhmioyrgh8ei epituxws kanw redirext sto loginpage
  }

  SignOut(req, res) {
    //aposyndesh xrhsth
    console.log(req.session);
    if (req.session && req.session.user) {
      delete req.session.user;
      res.clearCookie("access_token").redirect("/login");
    } else {
      res.redirect("/");
    }
  }
}
module.exports = AuthController;

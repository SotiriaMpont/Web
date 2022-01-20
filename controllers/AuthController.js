const UserService = require("../Service/UserService");

class AuthController {
    #UserService = new UserService();

    async SignInAsync(req, res) {
        const email = req.body.email;
        const username = req.body.username;
        const password = req.body.password;

        const result = await this.#UserService.SignInAsync(email, username, password);

        if (!result
            || !result.success) {
            return res.status(404).send({ message: "User Not found." });
        }
        res
            .cookie("access_token", result.accessToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
            })
            .redirect('/mainpage');
    }

    async SignUpAsync(req, res) {
        const user = {
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            psw_repeat: req.body.psw_repeat,
            roles: ["moderator"]
        }

        const success = await this.#UserService.SignUpAsync(user);

        if (!success)
            return res.status(404).send({ message: "User Not found." });

        res
            .redirect('/login');
    }

    async SignOut(res) {
        res
            .clearCookie("access_token")
            .redirect('/login');
    }
}
module.exports = AuthController;
const UserService = require("../Service/UserService");

class AuthController {
    #UserService = new UserService();

    async SignInAsync(req, res) {
        const username = req.body.username;
        const password = req.body.password;

        
        const result = await this.#UserService.SignInAsync(username, password);

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
    
    async EditAsync(req, res){
        const username = req.body.username;
        const new_username = req.body.new_username;
        const password = req.body.password;
        const psw_repeat = req.body.psw_repeat;

        
        const result = await this.#UserService.EditAsync(username, new_username, password, psw_repeat);

        if (result == "Error1")
            return res.status(404).send({ message: "User already exists." });
        else if(result == "Error2")
            return res.status(404).send({ message: "Passwords don't match." });
        else if (result == "Error3")
            return res.status(404).send({ message: "Password has unvalid form." });
        else if (result == "Error4")
            return res.status(404).send({ message: "This username doesn't exist.Try again." });
        else {
            res   
                .redirect('/login');
        }


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

        if (success == "Error1")
            return res.status(404).send({ message: "User already exists." });
        else if (success == "Error2")
            return res.status(404).send({ message: "Email already exists." });
        else if (success == "Error3")
            return res.status(404).send({ message: "Passwords don't match." });
        else if (success == "Error4")
            return res.status(404).send({ message: "Password has unvalid form." });
        else {
            res   
                .redirect('/login');
        }
    }

    async SignOut(res) {
        res
            .clearCookie("access_token")
            .redirect('/login');
    }
}
module.exports = AuthController;
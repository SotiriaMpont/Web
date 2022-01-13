const UserRepository = require("../Infastracture/UserRepositroy");
const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");

class UserService {
    #repo = new UserRepository();

    async SignInAsync(username, password) {
        const user = await this.#repo.FindbyUserName(username);

        if (user
            && user.password === password) {
            //generate jwt for auth
            const token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: 3600
            });
            return {
                success: true,
                id: user._id,
                username: user.username,
                email: user.email,
                //roles: authorities,
                accessToken: token
            };
        }
        return {
            success: false
        };
    }

    async SignUpAsync(user) {
        console.log(await this.#repo.IsUserExists(user.username))
        if (!user
            || await this.#repo.IsUserExists(user.username)) {
            return false;
        }
        const s = await this.#repo.AddAsync(user);
        return true;
    }

}
module.exports = UserService;
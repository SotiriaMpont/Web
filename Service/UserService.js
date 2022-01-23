const UserRepository = require("../Infastracture/UserRepositroy");
const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const User = require("../models/user.model");
const req = require("express/lib/request");
const bcrypt = require("bcryptjs");

class UserService {
    #repo = new UserRepository();

    async SignInAsync(username, password) {
        const user = await this.#repo.FindbyUserName(username);

        if (user
            && bcrypt.compareSync(
                password,
                user.password
              )) {
            //generate jwt for user
            const token = jwt.sign({
                id: user.id,
                roles: user.roles,
                email: user.email,
                username: user.username
            },
                config.secret, {
                expiresIn: 3600 //active for 1 hour
            });
            return {
                success: true,
                accessToken: token
            };
        }
        return {
            success: false
        };
    }

    async SignUpAsync(user) {
        let result
        

        if (await this.#repo.IsUserExists(user.username)) {
            result = 'Error1';
        }else if (await this.#repo.emailAlreadyExists(user.email)) {
            result = 'Error2';
        }else if (user.password != user.psw_repeat) {
            result = 'Error3';
        }else if (user.password = "(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':\\|,.<>\/?]).{8,15}" ) {
            result = 'Error4';
        }else{
            user.password = bcrypt.hashSync(user.password); //hash password for extra security 
            const s = await this.#repo.AddAsync(user);
        }

       
        return result;
    }



}
module.exports = UserService;
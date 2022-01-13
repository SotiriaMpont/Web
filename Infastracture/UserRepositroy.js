const db = require("../models/index");

class UserRepository {
    async FindbyUserName(username) {
        const UserModel = db.user;

        return await UserModel.findOne({
            username: username
        }).exec();
    }

    async IsUserExists(username) {
        const UserModel = db.user;

        return await UserModel.exists({
            username: username
        });
    }

    async AddAsync(user) {
        const UserModel = db.user;
        return await UserModel.create(user);
    }
}

module.exports = UserRepository;
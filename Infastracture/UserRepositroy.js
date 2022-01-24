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
        }).exec();
    }
    async emailAlreadyExists(email) {
        const UserModel = db.user;

        return await UserModel.exists({
            email: email
        }).exec();
    }

    async EditAsync(username, new_username, password){
        const UserModel = db.user;

        if(new_username == ""){
            return await UserModel.collection.updateOne(
                { username : username },
                {
                    $set: { password : password },
                    $currentDate: { "lastModified": true }
                }
            )
        }else{
            return await UserModel.collection.updateOne(
                { username : username },
                {
                    $set: { username: new_username , password : password },
                    $currentDate: { "lastModified": true }
                }
            )
        }

    }
    

    async AddAsync(user) {
        const UserModel = db.user;
        return await UserModel.create(user);
    }
}

module.exports = UserRepository;
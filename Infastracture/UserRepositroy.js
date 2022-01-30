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
    async emailAlreadyExists(email) {
        const UserModel = db.user;

        return await UserModel.exists({
            email: email
        });
    }

    async EditAsync(username, new_username, password){
        const UserModel = db.user;

        if(new_username == ""){
            return await UserModel.collection('User').updateOne(
                { username: username },
                {
                    $set: { password : password },
                }
             )

        }else{
            return await UserModel.collection('User').updateOne(
                { username: username },
                {
                    $set: { username: new_username , password : password },
                }
            )
        }

    }
    

    async AddAsync(user) {
        const UserModel = db.user;
        return await UserModel.collection('User').create(user);
    }
}

module.exports = UserRepository;
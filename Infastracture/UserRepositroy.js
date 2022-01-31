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

    async EditAsync(Edituser){
        const UserModel = db.user;

        
        if(Edituser.new_username == ""){
            return await UserModel.updateOne(
                { username: Edituser.username },
                { $set:
                    {
                        password: Edituser.password
                    }
                }
            )

        }else{ 
            return await UserModel.updateOne(
                { username: Edituser.username },
                { $set:
                    {
                        username: Edituser.new_username,
                        password: Edituser.password
                    }
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
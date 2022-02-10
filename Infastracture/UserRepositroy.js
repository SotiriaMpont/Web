const db = require("../models/index");

class UserRepository {
  async FindbyUserName(username) {
    const UserModel = db.user;

    return await UserModel.findOne({
      username: username,
    }).exec();
  }

  async IsUserExists(username) {
    const UserModel = db.user;

    return await UserModel.exists({
      username: username,
    });
  }
  async emailAlreadyExists(email) {
    const UserModel = db.user;

    return await UserModel.exists({
      email: email,
    });
  }

  async EditAsync(Edituser) {
    const UserModel = db.user;

    return await UserModel.updateOne(
        { username: Edituser.username },
        {
          $set: {
            username: Edituser.new_username,
            password: Edituser.password,
          },
        }
    );
  }

  async findBy(query, fields) {
    const UserModel = db.user;
    return await UserModel.find(query, fields).exec(); //epistrefei ena array apo poi
  }
  async iskrousma(username){
    const UserModel = db.user;

    return await UserModel.exists({
      username:username,
      krousma:null,
    });
  }
  
  async addkrousma(username,date) {
    const UserModel = db.user;
    return await UserModel.updateOne(
      { username: username },
      {
        $set: {
          krousma: date,
        },
      }
    );
  }

  async AddAsync(user) {
    const UserModel = db.user;
    return await UserModel.create(user);
  }
}

module.exports = UserRepository;

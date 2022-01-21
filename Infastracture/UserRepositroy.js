const db = require("../models/index");

class UserRepository {
  //euresh xrhsth me to onoma tou
  async FindbyUserName(username) {
    const UserModel = db.user;

    return await UserModel.findOne({
      username: username,
    }).exec();
  }
  //elegxosgia ton o xrhsths yparxei
  async IsUserExists(username) {
    const UserModel = db.user;

    return await UserModel.exists({
      username: username,
    });
  }
  //shmiourgia kainourioy xrhsth
  async AddAsync(user) {
    const UserModel = db.user;
    return await UserModel.create(user);
  }
}

module.exports = UserRepository;

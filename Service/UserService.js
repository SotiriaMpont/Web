const UserRepository = require("../Infastracture/UserRepositroy");
const PoiRepository = require("../Infastracture/PoiRepository");
const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const User = require("../models/user.model");
const req = require("express/lib/request");
const bcrypt = require("bcryptjs");

class UserService {
  #repo = new UserRepository();
  #poirepo = new PoiRepository();
  //admin services
  async Uploadfiles(theNewPoi){

    //elegxos diplotipon eggrafon
    for(var i=0;i<theNewPoi.length;i++){
        const poiname=theNewPoi[i].name
        if(await this.#poirepo.PoiExists(poiname)){//tsekarw gia kathe poi an uparxei hdh
            console.log(poiname);
            console.log("Already exists so we didn't add it");
        }
        else{ 
            const upload = await this.#poirepo.Upload(theNewPoi[i]);
        }
    }
  }

  async Deletefiles(){
      const deleteall = await this.#poirepo.Delete();
      return deleteall;
  }

  //user services
  async SignInAsync(username, password) {
    const user = await this.#repo.FindbyUserName(username);

    if (user && bcrypt.compareSync(password, user.password)) {
      //generate jwt for user
      const token = jwt.sign(
        {
          id: user.id,
          roles: user.roles,
          email: user.email,
          username: user.username,
        },
        config.secret,
        {
          expiresIn: 3600, //active for 1 hour
        }
      );
      return {
        success: true,
        accessToken: token,
        user: username
      };
    }
    return {
      success: false,
    };
  }

  async EditAsync(username, new_username, password, psw_repeat) {
    let result;

    const theuser_forupdate = await this.#repo.FindbyUserName(username);

    if (theuser_forupdate) {
      if (await this.#repo.IsUserExists(new_username)) {
        result = "Error1";
      } else if (password != psw_repeat) {
        result = "Error2";
        // } else if (
        //   password !=
        //   "(?=.*d)(?=.*[A-Z])(?=.*[!@#$%^&*()_+-=[]{};':\\|,.<>/?]).{8,}"
        // ) {
        //result = "Error3";
      } else {
        password = bcrypt.hashSync(password); //hash password for extra security
        const s = await this.#repo.EditAsync(username, new_username, password);
      }
    } else result = "Error4";

    return result;
  }

  async SignUpAsync(user) {
    let result;

    if (await this.#repo.IsUserExists(user.username)) {
      result = "Error1";
    } else if (await this.#repo.emailAlreadyExists(user.email)) {
      result = "Error2";
    } else if (user.password != user.psw_repeat) {
      result = "Error3";
    } //else if (
    // user.password !=
    // "^(?=.*d)(?=.*[A-Z])(?=.*[!@#$%^&*()_+-=[]{};':\\|,.<>/?])(.{8,})$"
    //) {
    //result = "Error4";
    //}
    else {
      user.password = bcrypt.hashSync(user.password); //hash password for extra security
      const s = await this.#repo.AddAsync(user);
    }

    return result;
  }
  
  async dilosi(username,date){
    //epistrefei to array krousma
    const query = {
        username: username,
    };
    const fields = {
      _id: 0,
      krousma:1,
    };

    const findolddate = await this.#repo.findBy(query, fields);
    console.log(findolddate);

    if(await this.#repo.iskrousma(username)){//an date null vale thn nea hmeromhnia
      const s = await this.#repo.addkrousma(username,date);
    }

    var new_date = new Date(date);//twrinh hmerominia xrhsth

    
    var comparedate=findolddate[0].krousma;//h prohgoumenh hmerominia tou 
  
    var  comparedateInTimestamp = comparedate.getTime();//prohgoumenh hmerominia se timestamp

    var dateplus14 = new Date(comparedateInTimestamp + 12096e5); //+14 se timestamp
  
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;

    function dateDifference(a, b) { //sugkrish hmeromhniwn
        
        const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
        const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

        return Math.floor((utc2 - utc1) / _MS_PER_DAY);
    }

    var difference = dateDifference(dateplus14,new_date);//sugkrinw (thn palia date+14) me thn nea
    console.log(difference); //an den exoun operasei 14 meres tha einai arnhtikh timh
    if(difference<0){
      const s = await this.#repo.addkrousma(username,date);
    }else{
      return 'Error 1';
    }
    

  }


}
module.exports = UserService;
